import { apiInstance } from '../axios'

export const getPaymentStatus = (transactionId: string) =>
  apiInstance.get(`/payment-status/${transactionId}`).then((res) => res.data)
