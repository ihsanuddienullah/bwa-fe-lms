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
import { useNavigate, useParams } from 'react-router'
import {
  createCourse,
  getCategories,
  getCourseById,
  updateCourse,
} from '../../../../api/services/course-service'
import type { IGetCategoriesResponse } from '../../../../utils/global-types'
import {
  createCourseSchema,
  updateCourseSchema,
} from '../../../../utils/schema'
import type { TCreateCourse, TUpdateCourse } from './types'

const useCustom = () => {
  const navigate = useNavigate()
  const courseId = useParams().course_id

  const [thumbnailPreview, setThumbnailPreview] = useState('')

  const inputThumbnail = useRef<HTMLInputElement>(null)

  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(courseId ? updateCourseSchema : createCourseSchema),
  })

  const {
    data: dataCourseById,
    isLoading: isLoadingCourseById,
    isSuccess,
  } = useQuery({
    queryKey: ['courses', courseId],
    queryFn: () => getCourseById(courseId || ''),
    enabled: !!courseId,
  })

  const { data: dataCategories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
  })

  const createCourseMutation = useMutation({
    mutationFn: (payload: TCreateCourse) => createCourse(payload),
  })

  const updateCourseMutation = useMutation({
    mutationFn: (payload: TUpdateCourse) =>
      updateCourse(courseId || '', payload),
  })

  const categories = useMemo(
    () =>
      (dataCategories?.data || []).map((item: IGetCategoriesResponse) => item),
    [dataCategories]
  )

  const onSubmit = useCallback(
    async (value: TCreateCourse | TUpdateCourse) => {
      try {
        if (courseId) {
          const response = await updateCourseMutation.mutateAsync(
            value as TUpdateCourse
          )

          if (response.message.includes('success')) {
            toast.success('Course updated successfully')
          }
        } else {
          const response = await createCourseMutation.mutateAsync(
            value as TCreateCourse
          )

          if (response.message.includes('success')) {
            toast.success('Course created successfully')
          }
        }
        navigate('/manager/courses')
      } catch (error) {
        console.log(error)
      }
    },
    [courseId, updateCourseMutation, createCourseMutation, navigate]
  )

  const onThumbnailChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const file = event.target.files[0]
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

  useEffect(() => {
    if (dataCourseById && isSuccess) {
      const course = dataCourseById.data

      setValue('title', course.title)
      setValue('categoryId', course.category)
      setValue('description', course.description)
      setValue('tagline', course.tagline)

      if (course.thumbnail) {
        setThumbnailPreview(course.thumbnail || '')
      }
    }
  }, [dataCourseById, isSuccess, setValue])

  return {
    data: {
      categories,
      courseId,
      formState,
      submitting: createCourseMutation.isPending,
      loadingCategories: isLoadingCategories,
      loadingCourseById: isLoadingCourseById,
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
