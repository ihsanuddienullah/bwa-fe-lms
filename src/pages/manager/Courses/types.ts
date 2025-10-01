export interface IGetCoursesResponse {
  _id: number
  title: string
  thumbnail: string
  total_students: number
  category: string
  students: string[]
}

export interface ICourse {
  id: number
  title: string
  thumbnail: string
  totalStudents: number
  category: string
  students: string[]
}

export interface ICourseContent {
  id: number
  title: string
  type: 'video' | 'text'
  thumbnail: string
  orderNumber: number
}

export interface ICourseDetail {
  id: string
  title: string
  thumbnail: string
  totalStudents: number
  category: string
  totalContents: number
  hasCertificate: boolean
  contents: ICourseContent[]
}
