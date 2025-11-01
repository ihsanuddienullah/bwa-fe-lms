import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import {
  useCallback,
  useEffect,
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
import { snakeCaseKeys } from '../../../../utils/formatter'
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

  const getCourseByIdQuery = useQuery({
    queryKey: ['courses', courseId],
    queryFn: () => getCourseById(courseId || ''),
    enabled: !!courseId,
  })

  const getCategoriesQuery = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
  })

  const createCourseMutation = useMutation({
    mutationFn: (payload: TCreateCourse) => {
      const requestPayload = {
        ...(snakeCaseKeys(payload) as object),
        thumbnail: payload.thumbnail,
      } as TCreateCourse

      return createCourse(requestPayload)
    },
    onSuccess: () => {
      toast.success('Course created successfully')
      navigate('/manager/courses')
    },
  })

  const updateCourseMutation = useMutation({
    mutationFn: (payload: TUpdateCourse) => {
      const requestPayload = {
        ...(snakeCaseKeys(payload) as object),
        thumbnail: payload.thumbnail,
      } as TUpdateCourse

      return updateCourse(courseId || '', requestPayload)
    },
    onSuccess: () => {
      toast.success('Course updated successfully')
      navigate('/manager/courses')
    },
  })

  const onSubmit = useCallback(
    async (value: TCreateCourse | TUpdateCourse) => {
      try {
        if (courseId) {
          await updateCourseMutation.mutateAsync(value as TUpdateCourse)
        } else {
          await createCourseMutation.mutateAsync(value as TCreateCourse)
        }
      } catch (error) {
        console.log(error)
      }
    },
    [courseId, updateCourseMutation, createCourseMutation]
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
    if (getCourseByIdQuery.data && getCourseByIdQuery.isSuccess) {
      const course = getCourseByIdQuery.data.data

      setValue('title', course.title)
      setValue('categoryId', course.category._id)
      setValue('description', course.description)
      setValue('tagline', course.tagline)

      if (course.thumbnail) {
        setThumbnailPreview(course.thumbnail || '')
      }
    }
  }, [getCourseByIdQuery.data, getCourseByIdQuery.isSuccess, setValue])

  return {
    data: {
      categories: getCategoriesQuery.data?.data || [],
      courseId,
      formState,
      isSubmitting: courseId
        ? updateCourseMutation.isPending
        : createCourseMutation.isPending,
      loadingCategories: getCategoriesQuery.isLoading,
      loadingCourseById: getCourseByIdQuery.isLoading,
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
