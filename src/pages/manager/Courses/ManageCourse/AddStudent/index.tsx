import type { IStudent } from '../../types'
import useCustom from './hooks'

const AddStudent = () => {
  const { data, methods } = useCustom()

  return (
    <>
      <header className="flex items-center justify-between gap-[30px]">
        <div>
          <h1 className="font-extrabold text-[28px] leading-[42px]">
            Add Student
          </h1>
          <p className="text-[#838C9D] mt-[1]">Keep your student happy</p>
        </div>
      </header>
      <form
        onSubmit={methods.handleSubmit(methods.onSubmit)}
        className="flex flex-col w-[550px] rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
      >
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="student" className="font-semibold">
            Select Student
          </label>
          <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
            <img
              src="/assets/images/icons/bill-black.svg"
              className="w-6 h-6"
              alt="icon"
            />
            <select
              {...methods.register('studentId')}
              id="studentId"
              className="appearance-none outline-none w-full py-3 px-2 -mx-2 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
            >
              <option value="" hidden>
                Choose one student
              </option>
              {data.students.map((item: IStudent) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <img
              src="/assets/images/icons/arrow-down.svg"
              className="w-6 h-6"
              alt="icon"
            />
          </div>
          {data.formState.errors.studentId && (
            <span className="text-red-500 text-sm">
              {data.formState.errors.studentId.message}
            </span>
          )}
        </div>

        <div className="flex items-center justify-end gap-[14px]">
          <button
            type="submit"
            // disabled={data.isSubmitting}
            className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap cursor-pointer"
          >
            Add Now
          </button>
        </div>
      </form>
    </>
  )
}

export default AddStudent
