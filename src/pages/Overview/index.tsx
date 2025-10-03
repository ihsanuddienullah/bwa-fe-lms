import { Link } from 'react-router'
import LatestCourse from './_components/LatestCourses'
import LatestStudents from './_components/LatestStudents'
import StatsOverview from './_components/StatsOverview'
import useCustom from './hooks'

interface OverviewProps {
  role?: 'manager' | 'student'
}

const Overview = ({ role = 'manager' }: OverviewProps) => {
  const { data } = useCustom()

  if (role === 'student') {
    return <LatestCourse role={role} courseList={data?.courses} />
  }

  return (
    <>
      <header className="flex items-center justify-between gap-[30px]">
        <div>
          <h1 className="font-extrabold text-[28px] leading-[42px]">
            Overview
          </h1>
          <p className="text-[#838C9D] mt-[1]">Grow your company quickly</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="#"
            className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
          >
            Customize
          </Link>
          <Link
            to=""
            className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
          >
            Export Data
          </Link>
        </div>
      </header>
      <StatsOverview />
      <div className="grid grid-cols-2 gap-[30px]">
        <LatestCourse role={role} courseList={data?.courses} />
        <LatestStudents />
      </div>
    </>
  )
}

export default Overview
