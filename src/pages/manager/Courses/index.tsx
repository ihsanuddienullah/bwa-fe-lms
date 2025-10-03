import { Link } from 'react-router'
import CourseCard from './_components/CourseCard'
import useCustom from './hooks'
import type { ICourse } from './types'

const Courses = () => {
  const { data } = useCustom()

  return (
    <>
      <header className="flex items-center justify-between gap-[30px]">
        <div>
          <h1 className="font-extrabold text-[28px] leading-[42px]">
            Manage Courses
          </h1>
          <p className="text-[#838C9D] mt-[1]">
            Give the best future for your great employees
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
          >
            Import File
          </a>
          <Link
            to="/manager/courses/create"
            className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
          >
            New Course
          </Link>
        </div>
      </header>
      <section
        id="CourseList"
        className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
      >
        {data.courses.map((course: ICourse) => (
          <CourseCard
            id={course.id}
            key={course.id}
            title={course.title}
            totalStudents={course.totalStudents}
            thumbnail={course.thumbnail}
            category={course.category}
          />
        ))}
        <div id="Pagination" className="flex items-center gap-3">
          <button
            type="button"
            className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 bg-[#662FFF] text-white"
          >
            <span className="font-semibold text-sm leading-[21px]">1</span>
          </button>
          <button
            type="button"
            className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
          >
            <span className="font-semibold text-sm leading-[21px]">2</span>
          </button>
          <button
            type="button"
            className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
          >
            <span className="font-semibold text-sm leading-[21px]">3</span>
          </button>
          <button
            type="button"
            className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
          >
            <span className="font-semibold text-sm leading-[21px]">4</span>
          </button>
          <button
            type="button"
            className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
          >
            <span className="font-semibold text-sm leading-[21px]">5</span>
          </button>
        </div>
      </section>
    </>
  )
}

export default Courses
