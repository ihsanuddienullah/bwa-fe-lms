import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router'
import {
  createCourseContent,
  getCourseContentById,
  updateCourseContent,
} from '../../../../../api/services/course-service'
import { snakeCaseKeys } from '../../../../../utils/formatter'
import { createCourseContentSchema } from '../../../../../utils/schema'
import type { TCreateCourseContent } from './types'

const useCustom = () => {
  const navigate = useNavigate()
  const courseId = useParams().course_id
  const contentId = useParams().content_id

  const { register, handleSubmit, formState, setValue, watch, getValues } =
    useForm({
      resolver: zodResolver(createCourseContentSchema),
    })

  const getCourseContentByIdQuery = useQuery({
    queryKey: ['contents', contentId],
    queryFn: () => getCourseContentById(contentId || ''),
    enabled: !!contentId,
  })

  const createCourseContentMutation = useMutation({
    mutationFn: (payload: TCreateCourseContent) =>
      createCourseContent(snakeCaseKeys(payload)),
    onSuccess: () => {
      toast.success('Content created successfully')
      navigate(`/manager/courses/${courseId}`)
    },
  })

  const updateCourseContentMutation = useMutation({
    mutationFn: (payload: TCreateCourseContent) =>
      updateCourseContent(contentId || '', snakeCaseKeys(payload)),
    onSuccess: () => {
      toast.success('Content updated successfully')
      navigate(`/manager/courses/${courseId}`)
    },
  })

  const onSubmit = useCallback(
    async (values: TCreateCourseContent) => {
      try {
        if (contentId) {
          await updateCourseContentMutation.mutateAsync({
            ...values,
            courseId,
          })
        } else {
          await createCourseContentMutation.mutateAsync({
            ...values,
            courseId,
          })
        }
      } catch (error) {
        console.error(error)
      }
    },
    [
      contentId,
      courseId,
      createCourseContentMutation,
      updateCourseContentMutation,
    ]
  )

  useEffect(() => {
    if (
      getCourseContentByIdQuery.data?.data &&
      getCourseContentByIdQuery.isSuccess
    ) {
      const contentData = getCourseContentByIdQuery.data.data

      setValue('title', contentData.title)
      setValue('type', contentData.type)
      setValue('youtubeId', contentData.youtube_id || '')
      setValue('text', contentData.text || '')
    }
  }, [
    getCourseContentByIdQuery.data,
    getCourseContentByIdQuery.isSuccess,
    setValue,
  ])

  return {
    data: {
      contentId,
      formState,
      isSubmitting: contentId
        ? updateCourseContentMutation.isPending
        : createCourseContentMutation.isPending,
    },
    methods: {
      getValues,
      handleSubmit,
      onSubmit,
      register,
      watch,
      setValue,
    },
  }
}

export default useCustom
