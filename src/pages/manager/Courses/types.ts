export interface ICourse {
  id: string
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
  category: {
    id: string
    name: string
  }
  contents: ICourseContent[]
}
