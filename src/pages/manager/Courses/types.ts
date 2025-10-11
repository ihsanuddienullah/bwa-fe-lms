export interface ICourse {
  id: string
  title: string
  thumbnail: string
  totalStudents: number
  category: string
  students: string[]
}

export interface ICourseContent {
  id: string
  title: string
  type: 'video' | 'text'
  youtubeId: string
  text: string
  courseId: string
  isCompleted: boolean
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
