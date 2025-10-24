export interface IStorageKey {
  name: string
  email: string
  role: 'student' | 'manager'
  photo: string
  token: string
}

export interface IGetCoursesResponse {
  _id: number
  title: string
  thumbnail: string
  total_students: number
  category: string
  students: string[]
}

export interface IGetCategoriesResponse {
  _id: string
  name: string
  courses: string[]
  updatedAt: string
}
