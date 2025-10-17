import useCustom from './hooks'

const CreateStudent = () => {
  const { data, methods, refs } = useCustom()

  return (
    <>
      <header className="flex items-center justify-between gap-[30px]">
        <div>
          <h1 className="font-extrabold text-[28px] leading-[42px]">
            {data.studentId ? 'Edit' : 'Add'} Student
          </h1>
          <p className="text-[#838C9D] mt-[1]">
            {data.studentId ? 'Edit' : 'Create'} new future for company
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
          >
            Import from BWA
          </a>
        </div>
      </header>
      <form
        onSubmit={methods.handleSubmit(methods.onSubmit)}
        className="flex flex-col w-[550px] rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
      >
        <div className="relative flex flex-col gap-[10px]">
          <label htmlFor="photo" className="font-semibold">
            {data.studentId ? 'Edit' : 'Add a'} Photo
          </label>
          <div className="flex items-center gap-[14px]">
            <div
              id="photo-preview-container"
              className="relative flex shrink-0 w-20 h-20 rounded-[20px] border border-[#CFDBEF] overflow-hidden"
            >
              <button
                onClick={() => refs.inputPhoto.current?.click()}
                type="button"
                id="trigger-input"
                className="cursor-pointer absolute top-0 left-0 w-full h-full flex justify-center items-center gap-3 z-0"
              >
                {data.photoPreview === '' && (
                  <img
                    src="/assets/images/icons/gallery-add-black.svg"
                    className="w-6 h-6"
                    alt="icon"
                  />
                )}
              </button>
              {data.photoPreview !== '' && (
                <img
                  id="photo-preview"
                  src={data.photoPreview}
                  className="w-full h-full object-cover"
                  alt="photo"
                />
              )}
            </div>
            <button
              type="button"
              id="delete-preview"
              onClick={methods.handleDeletePreview}
              className={`cursor-pointer w-12 h-12 rounded-full z-10 ${
                data.photoPreview === '' || data.studentId ? 'hidden' : ''
              }`}
            >
              <img src="/assets/images/icons/delete.svg" alt="delete" />
            </button>
          </div>
          <input
            {...methods.register('photo')}
            type="file"
            name="photo"
            id="photo"
            accept="image/*"
            className="absolute bottom-0 left-1/4 -z-10"
            onChange={methods.onPhotoChange}
            ref={refs.inputPhoto}
          />
          {data.formState.errors.photo && (
            <span className="text-red-500 text-sm">
              {String(data.formState.errors.photo.message)}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="name" className="font-semibold">
            Full Name
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
              name="name"
              id="name"
              className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
              placeholder="Write your name"
            />
          </div>
          {data.formState.errors.name && (
            <span className="text-red-500 text-sm">
              {data.formState.errors.name.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
            <img
              src="/assets/images/icons/sms-black.svg"
              className="w-6 h-6"
              alt="icon"
            />
            <input
              {...methods.register('email')}
              type="email"
              name="email"
              id="email"
              className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
              placeholder="Write your email address"
            />
          </div>
          {data.formState.errors.email && (
            <span className="text-red-500 text-sm">
              {data.formState.errors.email.message}
            </span>
          )}
        </div>
        <div
          className={`flex flex-col gap-[10px] ${data.studentId && 'hidden'}`}
        >
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
            <img
              src="/assets/images/icons/lock-black.svg"
              className="w-6 h-6"
              alt="icon"
            />
            <input
              {...methods.register('password')}
              type="password"
              name="password"
              id="password"
              className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
              placeholder="Type password"
            />
          </div>
          {data.formState.errors.password && (
            <span className="text-red-500 text-sm">
              {data.formState.errors.password.message}
            </span>
          )}
        </div>
        <div className="flex items-center gap-[14px]">
          <button
            type="button"
            className="cursor-pointer w-full rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
          >
            Save as Draft
          </button>
          <button
            type="submit"
            className="cursor-pointer w-full rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
          >
            {data.studentId ? 'Edit' : 'Add'} Now
          </button>
        </div>
      </form>
    </>
  )
}

export default CreateStudent
