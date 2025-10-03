import type { ILatestCourse } from '../types'
import CourseCard from './CourseCard'

interface LatestCoursesProps {
  role: 'manager' | 'student'
  courseList: ILatestCourse[]
}

const LatestCourses = ({ role, courseList }: LatestCoursesProps) => {
  return (
    <section
      id="LatestCourses"
      className="flex flex-col rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
    >
      <h2 className="font-extrabold text-[22px] leading-[33px]">
        Latest Courses
      </h2>
      {courseList.length === 0 && (
        <p className="text-[#838C9D]">No courses available</p>
      )}
      {courseList.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          thumbnail={course.thumbnail}
          role={role}
          title={course.title}
          category={course.category}
        />
      ))}
    </section>
  )
}

export default LatestCourses
