import { useMutation } from '@tanstack/react-query'
import { useCallback } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { signUp } from '../../api/services/auth-service'
import type { TSignUp } from '../SignUp/types'

const useCustom = () => {
  const navigate = useNavigate()

  const { isPending, mutateAsync } = useMutation({
    mutationFn: (payload: TSignUp) => signUp(payload),
  })

  const handleCheckout = useCallback(async () => {
    const data = localStorage.getItem('signUpData')

    if (!data) {
      toast.error('You need to sign up first')
      navigate('/sign-up')
      return
    }

    try {
      const parsedData = JSON.parse(data)
      const payload = {
        ...parsedData,
        price: 280000,
      }

      const response = await mutateAsync(payload)

      window.location.replace(response.data.midtrans_payment_url)
    } catch (error) {
      console.log(error)
    }

    localStorage.removeItem('signUpData')
  }, [mutateAsync])

  return {
    data: {
      isPending,
    },
    methods: {
      handleCheckout,
    },
  }
}

export default useCustom
