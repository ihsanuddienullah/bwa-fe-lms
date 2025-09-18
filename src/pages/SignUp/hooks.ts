import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { signUpSchema } from './schema'
import type { TSignUp } from './types'

const useCustom = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, formState } = useForm<TSignUp>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = useCallback(
    (value: TSignUp) => {
      localStorage.setItem('signUpData', JSON.stringify(value))

      navigate('/pricing')
    },
    [navigate]
  )

  return {
    data: { formState },
    methods: {
      handleSubmit,
      onSubmit,
      register,
    },
  }
}

export default useCustom
