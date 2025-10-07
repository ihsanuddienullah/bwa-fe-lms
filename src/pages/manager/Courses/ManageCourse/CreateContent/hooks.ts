import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router'
import { createCourseContent } from '../../../../../api/services/course-service'
import { createCourseContentSchema } from '../../../../../utils/schema'
import type { TCreateCourseContent } from './types'

const useCustom = () => {
  const navigate = useNavigate()
  const courseId = useParams().course_id

  const { register, handleSubmit, formState, setValue, watch } = useForm({
    resolver: zodResolver(createCourseContentSchema),
  })

  const createCourseContentMutation = useMutation({
    mutationFn: (payload: TCreateCourseContent) => createCourseContent(payload),
  })

  const onSubmit = useCallback(
    async (values: TCreateCourseContent) => {
      try {
        if (courseId) {
          const response = await createCourseContentMutation.mutateAsync({
            ...values,
            courseId,
          })

          if (response.message.includes('success')) {
            toast.success('Course created successfully')
          }
        }
        navigate(`/manager/courses/${courseId}`)
      } catch (error) {
        console.error(error)
      }
    },
    [courseId, createCourseContentMutation, navigate]
  )

  return {
    data: {
      formState,
    },
    methods: {
      handleSubmit,
      onSubmit,
      register,
      watch,
      setValue,
    },
  }
}

export default useCustom
