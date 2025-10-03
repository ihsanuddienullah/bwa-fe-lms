import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
} from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import {
  createCourse,
  getCategories,
} from '../../../../api/services/course-service'
import type { IGetCategoriesResponse } from '../../../../utils/global-types'
import { createCourseSchema } from '../../../../utils/schema'
import type { TCreateCourse } from './types'

const useCustom = () => {
  const navigate = useNavigate()

  const [thumbnail, setThumbnail] = useState<File | null>(null)
  const [thumbnailPreview, setThumbnailPreview] = useState('')

  const inputThumbnail = useRef<HTMLInputElement>(null)

  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(createCourseSchema),
  })

  const { data, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
  })

  const { isPending, mutateAsync } = useMutation({
    mutationFn: (payload: TCreateCourse) => createCourse(payload),
  })

  const categories = useMemo(
    () => (data?.data || []).map((item: IGetCategoriesResponse) => item),
    [data]
  )

  const onSubmit = useCallback(
    async (value: TCreateCourse) => {
      try {
        const response = await mutateAsync(value)

        if (response.message.includes('success')) {
          toast.success('Course created successfully')
          navigate('/manager/courses')
        }
      } catch (error) {
        console.log(error)
      }
    },
    [mutateAsync, navigate]
  )

  const onThumbnailChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const file = event.target.files[0]
        setThumbnail(file)
        setValue('thumbnail', file, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
        setThumbnailPreview(URL.createObjectURL(file))
      }
    },
    [setValue]
  )

  const handleDeletePreview = useCallback(() => {
    setThumbnail(null)
    setValue('thumbnail', null, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    })
    setThumbnailPreview('')
    if (inputThumbnail.current) {
      inputThumbnail.current.value = ''
    }
  }, [setValue, inputThumbnail])

  useEffect(() => {
    return () => {
      if (thumbnailPreview !== '') {
        URL.revokeObjectURL(thumbnailPreview)
      }
    }
  }, [thumbnailPreview])

  return {
    data: {
      categories,
      formState,
      submitting: isPending,
      loading: isLoading,
      thumbnail,
      thumbnailPreview,
    },
    methods: {
      register,
      handleDeletePreview,
      handleSubmit,
      onSubmit,
      onThumbnailChange,
    },
    refs: {
      inputThumbnail,
    },
  }
}

export default useCustom
