import { Link } from 'react-router'

interface StudentCardProps {
  id: string
  name: string
  photo: string
  courses: string[]
  handleDeleteStudent: (studentId: string, name: string) => void
}

const StudentCard = ({
  id,
  name,
  photo,
  courses,
  handleDeleteStudent,
}: StudentCardProps) => {
  return (
    <div className="card flex items-center gap-5">
      <div className="relative flex shrink-0 w-20 h-20">
        <div className="rounded-[20px] bg-[#D9D9D9] overflow-hidden">
          <img src={photo} className="w-full h-full object-cover" alt="photo" />
        </div>
      </div>
      <div className="w-full">
        <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
          {name}
        </h3>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-[6px] mt-[6px]">
            <img
              src="/assets/images/icons/note-favorite-purple.svg"
              className="w-5 h-5"
              alt="icon"
            />
            <p className="text-[#838C9D]">{courses.length} Course Joined</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center gap-3">
        <Link
          to={`/manager/students/edit/${id}`}
          className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
        >
          Edit Profile
        </Link>
        <button
          type="button"
          onClick={() => handleDeleteStudent(id, name)}
          className="cursor-pointer w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default StudentCard
