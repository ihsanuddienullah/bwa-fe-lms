import { apiInstanceAuth } from '../axios'

export const getCourses = () =>
  apiInstanceAuth.get('/courses').then((res) => res.data)

export const getCategories = () =>
  apiInstanceAuth.get('/categories').then((res) => res.data)
