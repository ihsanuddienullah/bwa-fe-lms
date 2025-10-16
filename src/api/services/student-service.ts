import type { TCreateStudent } from '../../pages/manager/Students/CreateStudent/types'
import { apiInstanceAuth } from '../axios'

export const getStudents = () =>
  apiInstanceAuth.get('/students').then((res) => res.data)

export const createStudent = (data: TCreateStudent) =>
  apiInstanceAuth
    .post('/students', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => res.data)
