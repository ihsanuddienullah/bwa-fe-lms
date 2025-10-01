import { apiInstanceAuth } from '../axios'

export const getCourses = () =>
  apiInstanceAuth.get('/courses').then((res) => res.data)
