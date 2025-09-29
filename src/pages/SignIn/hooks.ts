import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import secureLocalStorage from 'react-secure-storage'
import { signIn } from '../../api/services/auth-service'
import { STORAGE_KEY } from '../../utils/constants'
import { signInSchema } from '../../utils/schema'
import type { TSignIn } from './types'

const useCustom = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, formState } = useForm<TSignIn>({
    resolver: zodResolver(signInSchema),
  })

  const { isPending, mutateAsync } = useMutation({
    mutationFn: (payload: TSignIn) => signIn(payload),
  })

  const onSubmit = useCallback(
    async (value: TSignIn) => {
      try {
        const response = await mutateAsync(value)

        secureLocalStorage.setItem(STORAGE_KEY, response.data)

        if (response.data.role === 'manager') {
          navigate('/manager/overview')
        } else {
          navigate('/student/overview')
        }
      } catch (error) {
        console.log(error)

        const err = error as AxiosError<{ message: string }>
        if (err.response) alert(`Sign-in failed. ${err.response.data.message}`)
      }
    },
    [mutateAsync, navigate]
  )

  return {
    data: {
      formState,
      isPending,
    },
    methods: {
      register,
      handleSubmit,
      onSubmit,
    },
  }
}

export default useCustom
