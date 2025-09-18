import { useMutation } from '@tanstack/react-query'
import { useCallback } from 'react'
import { signUp } from '../../api/services/auth-service'
import type { TSignUp } from '../SignUp/types'

const useCustom = () => {
  const { isPending, mutateAsync } = useMutation({
    mutationFn: (payload: TSignUp) => signUp(payload),
  })

  const handleCheckout = useCallback(async () => {
    const data = localStorage.getItem('signUpData')

    if (!data) return

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
