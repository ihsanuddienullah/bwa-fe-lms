import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { createCategory } from '../../../../api/services/course-service'
import { createCategorySchema } from '../../../../utils/schema'
import type { TCreateCategory } from './types'

const useCustom = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(createCategorySchema),
  })

  const createCategoryMutation = useMutation({
    mutationFn: (payload: TCreateCategory) => createCategory(payload),
    onSuccess: () => {
      toast.success('Category created successfully')
      navigate(-1)
    },
  })

  const onSubmit = useCallback(
    async (value: TCreateCategory) => {
      try {
        await createCategoryMutation.mutateAsync(value)
      } catch (error) {
        console.log(error)
      }
    },
    [createCategoryMutation]
  )

  return {
    data: {
      formState,
      isSubmitting: createCategoryMutation.isPending,
    },
    methods: {
      handleSubmit,
      onSubmit,
      register,
    },
  }
}

export default useCustom
