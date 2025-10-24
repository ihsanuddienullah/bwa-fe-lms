import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router'
import { getPaymentStatus } from '../../api/services/payment-service'

const useCustom = () => {
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const transactionId = params.get('order_id')

  const { data, isLoading } = useQuery({
    queryKey: ['transaction'],
    queryFn: () => getPaymentStatus(transactionId || ''),
  })

  return {
    data: {
      loading: isLoading,
      transaction: data?.data,
    },
    methods: {},
  }
}

export default useCustom
