import type {
  TCreateCourse,
  TUpdateCourse,
} from '../../pages/manager/Courses/CreateCourse/types'
import type { TCreateCourseContent } from '../../pages/manager/Courses/ManageCourse/CreateContent/types'
import { apiInstanceAuth } from '../axios'

export const getCourses = () =>
  apiInstanceAuth.get('/courses').then((res) => res.data)

export const getCourseById = (courseId: string) =>
  apiInstanceAuth.get(`/courses/${courseId}`).then((res) => res.data)

export const getCategories = () =>
  apiInstanceAuth.get('/categories').then((res) => res.data)

export const createCourse = async (data: TCreateCourse) =>
  apiInstanceAuth
    .post('/courses', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => res.data)

export const updateCourse = async (courseId: string, data: TUpdateCourse) =>
  apiInstanceAuth
    .put(`/courses/${courseId}`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => res.data)

export const deleteCourse = (courseId: string) =>
  apiInstanceAuth.delete(`/courses/${courseId}`).then((res) => res.data)

export const createCourseContent = (data: TCreateCourseContent) =>
  apiInstanceAuth.post('/courses/contents', data).then((res) => res.data)

export const updateCourseContent = (
  contentId: string,
  data: TCreateCourseContent
) =>
  apiInstanceAuth
    .put(`/courses/contents/${contentId}`, data)
    .then((res) => res.data)

export const getCourseContentById = (contentId: string) =>
  apiInstanceAuth.get(`/courses/contents/${contentId}`).then((res) => res.data)
