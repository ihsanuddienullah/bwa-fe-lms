import type {
  TCreateCourse,
  TUpdateCourse,
} from '../../pages/manager/Courses/CreateCourse/types'
import { apiInstanceAuth } from '../axios'

export const getCourses = () =>
  apiInstanceAuth.get('/courses').then((res) => res.data)

export const getCourseById = (courseId: string) =>
  apiInstanceAuth.get(`/courses/${courseId}`).then((res) => res.data)

export const getCategories = () =>
  apiInstanceAuth.get('/categories').then((res) => res.data)

export const createCourse = async (data: TCreateCourse) => {
  const requestPayload = { ...data, category_id: data.categoryId }

  const res = await apiInstanceAuth.post('/courses', requestPayload, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return res.data
}

export const updateCourse = async (courseId: string, data: TUpdateCourse) => {
  const requestPayload = { ...data, category_id: data.categoryId }

  const res = await apiInstanceAuth.put(
    `/courses/${courseId}`,
    requestPayload,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    }
  )
  return res.data
}

export const deleteCourse = (courseId: string) =>
  apiInstanceAuth.delete(`/courses/${courseId}`).then((res) => res.data)
