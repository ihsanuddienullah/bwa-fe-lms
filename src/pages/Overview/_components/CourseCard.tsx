import { Link } from 'react-router'

interface CourseCardProps {
  id: string
  thumbnail: string
  role: 'manager' | 'student'
  title: string
  category: string
}

const CourseCard = ({
  role = 'manager',
  id,
  thumbnail,
  title,
  category,
}: CourseCardProps) => {
  return (
    <div className="card flex items-center gap-5">
      <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
        <img
          src={thumbnail}
          className="w-full h-full object-cover"
          alt="thumbnail"
        />
      </div>
      <div className="w-full">
        <Link
          to={`/${role}/course/${id}/preview`}
          className="font-bold text-xl leading-[30px] line-clamp-1"
        >
          {title}
        </Link>
        <div className="flex items-center gap-[6px] mt-[6px]">
          <img src="/assets/images/icons/crown-purple.svg" alt="icon" />
          <p className="text-[#838C9D]">{category}</p>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
