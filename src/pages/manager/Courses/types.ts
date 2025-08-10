export interface Course {
  id: number
  title: string
  thumbnail: string
  totalStudents: number
  category: string
}

export interface CourseContent {
  id: number
  title: string
  type: 'video' | 'text'
  thumbnail: string
  orderNumber: number
}

export interface CourseDetail {
  id: string
  title: string
  thumbnail: string
  totalStudents: number
  category: string
  totalContents: number
  hasCertificate: boolean
  contents: CourseContent[]
}
