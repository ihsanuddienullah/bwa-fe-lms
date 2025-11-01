import useCustom from './hooks'

const CreateCategory = () => {
  const { data, methods } = useCustom()

  return (
    <>
      <header className="flex items-center justify-between gap-[30px]">
        <div>
          <h1 className="font-extrabold text-[28px] leading-[42px]">
            Create Category
          </h1>
          <p className="text-[#838C9D] mt-[1]">Add a new category</p>
        </div>
      </header>
      <form
        onSubmit={methods.handleSubmit(methods.onSubmit)}
        className="flex flex-col w-[550px] rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
      >
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="title" className="font-semibold">
            Category Name
          </label>
          <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
            <img
              src="/assets/images/icons/note-favorite-black.svg"
              className="w-6 h-6"
              alt="icon"
            />
            <input
              {...methods.register('name')}
              type="text"
              id="title"
              className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
              placeholder="Write better name for your course category"
            />
          </div>
          {data.formState.errors.name && (
            <span className="text-red-500 text-sm">
              {data.formState.errors.name.message}
            </span>
          )}
        </div>

        <div className="flex items-center justify-end gap-[14px]">
          <button
            type="submit"
            disabled={data.isSubmitting}
            className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap cursor-pointer"
          >
            Create Now
          </button>
        </div>
      </form>
    </>
  )
}

export default CreateCategory
