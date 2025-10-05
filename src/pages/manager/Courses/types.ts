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
  youtube_id: string
  text: string
  courseId: string
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
