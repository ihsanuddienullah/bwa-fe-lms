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

export const createCourse = (data: TCreateCourse) =>
  apiInstanceAuth
    .post('/courses', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => res.data)

export const updateCourse = (courseId: string, data: TUpdateCourse) =>
  apiInstanceAuth
    .put(`/courses/${courseId}`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => res.data)
