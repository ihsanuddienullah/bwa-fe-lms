import { apiInstanceAuth } from '../axios'

export const getStudents = () =>
  apiInstanceAuth.get('/students').then((res) => res.data)
