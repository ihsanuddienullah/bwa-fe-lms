interface StudentCardProps {
  id: string
  name: string
  photo: string
  handleDeleteCourseStudent: (studentId: string, name: string) => void
}

const StudentCard = ({
  id,
  name,
  photo,
  handleDeleteCourseStudent,
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
      </div>
      <div className="flex justify-end items-center gap-3">
        <button
          type="button"
          onClick={() => handleDeleteCourseStudent(id, name)}
          className="cursor-pointer w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default StudentCard
