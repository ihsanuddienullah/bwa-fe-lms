import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
} from 'react'
import { useForm } from 'react-hook-form'
import { getCategories } from '../../../../api/services/course-service'
import type { IGetCategoriesResponse } from '../../../../utils/global-types'
import { createCourseSchema } from '../../../../utils/schema'
import type { TCreateCourse } from './types'

const useCustom = () => {
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

  const categories = useMemo(
    () => (data?.data || []).map((item: IGetCategoriesResponse) => item),
    [data]
  )

  const onSubmit = useCallback((value: TCreateCourse) => {
    console.log(value)
  }, [])

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
