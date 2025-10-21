import type { TAddCourseStudent } from '../../pages/manager/Courses/ManageCourse/AddStudent/types'
import type { TCreateStudent } from '../../pages/manager/Students/CreateStudent/types'
import { apiInstanceAuth } from '../axios'

export const getStudents = () =>
  apiInstanceAuth.get('/students').then((res) => res.data)

export const getStudentById = (studentId: string) =>
  apiInstanceAuth.get(`/students/${studentId}`).then((res) => res.data)

export const createStudent = (data: TCreateStudent) =>
  apiInstanceAuth
    .post('/students', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => res.data)

export const updateStudent = (studentId: string, data: TCreateStudent) =>
  apiInstanceAuth
    .put(`/students/${studentId}`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => res.data)

export const deleteStudent = (studentId: string) =>
  apiInstanceAuth.delete(`/students/${studentId}`).then((res) => res.data)

export const addCourseStudent = (courseId: string, data: TAddCourseStudent) =>
  apiInstanceAuth
    .post(`/courses/students/${courseId}`, data)
    .then((res) => res.data)
