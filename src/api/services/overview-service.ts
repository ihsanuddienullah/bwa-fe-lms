import { apiInstanceAuth } from '../axios'

export const getOverview = () =>
  apiInstanceAuth.get('/overview').then((res) => res.data)
