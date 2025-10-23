export interface ILatestCourse {
  _id: string
  title: string
  thumbnail: string
  category: string
}

export interface ILatestStudent {
  _id: string
  name: string
  photo: string
  courses: string[]
}

export interface IOverview {
  totalStudents: number
  totalCourses: number
  totalVideoContents: number
  totalTextContents: number
}
