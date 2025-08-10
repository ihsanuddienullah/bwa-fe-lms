const Courses = () => {
  return (
    <div>
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
          <a
            href="create-new-course.html"
            className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
          >
            New Course
          </a>
        </div>
      </header>
      <section
        id="CourseList"
        className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
      >
        <div className="card flex items-center gap-5">
          <div className="flex shrink-0 w-[140px] h-[110px] rounded-[20px] bg-[#D9D9D9] overflow-hidden">
            <img
              src="/assets/images/thumbnails/th-1.png"
              className="w-full h-full object-cover"
              alt="thumbnail"
            />
          </div>
          <div className="w-full">
            <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
              Responsive Design Triclorem Lorem, ipsum dolor.
            </h3>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-[6px] mt-[6px]">
                <img
                  src="/assets/images/icons/profile-2user-purple.svg"
                  className="w-5 h-5"
                  alt="icon"
                />
                <p className="text-[#838C9D]">554 Students</p>
              </div>
              <div className="flex items-center gap-[6px] mt-[6px]">
                <img
                  src="/assets/images/icons/crown-purple.svg"
                  className="w-5 h-5"
                  alt="icon"
                />
                <p className="text-[#838C9D]">Programming</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-3">
            <a
              href="manage-course-materi.html"
              className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
            >
              Manage
            </a>
          </div>
        </div>
        <div className="card flex items-center gap-5">
          <div className="flex shrink-0 w-[140px] h-[110px] rounded-[20px] bg-[#D9D9D9] overflow-hidden">
            <img
              src="/assets/images/thumbnails/th-2.png"
              className="w-full h-full object-cover"
              alt="thumbnail"
            />
          </div>
          <div className="w-full">
            <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
              HTMX JavaScript 2020
            </h3>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-[6px] mt-[6px]">
                <img
                  src="/assets/images/icons/profile-2user-purple.svg"
                  className="w-5 h-5"
                  alt="icon"
                />
                <p className="text-[#838C9D]">2,887 Students</p>
              </div>
              <div className="flex items-center gap-[6px] mt-[6px]">
                <img
                  src="/assets/images/icons/crown-purple.svg"
                  className="w-5 h-5"
                  alt="icon"
                />
                <p className="text-[#838C9D]">Marketing</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-3">
            <a
              href="manage-course-materi.html"
              className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
            >
              Manage
            </a>
          </div>
        </div>
        <div className="card flex items-center gap-5">
          <div className="flex shrink-0 w-[140px] h-[110px] rounded-[20px] bg-[#D9D9D9] overflow-hidden">
            <img
              src="/assets/images/thumbnails/th-3.png"
              className="w-full h-full object-cover"
              alt="thumbnail"
            />
          </div>
          <div className="w-full">
            <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
              Mastering React
            </h3>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-[6px] mt-[6px]">
                <img
                  src="/assets/images/icons/profile-2user-purple.svg"
                  className="w-5 h-5"
                  alt="icon"
                />
                <p className="text-[#838C9D]">3,578 Students</p>
              </div>
              <div className="flex items-center gap-[6px] mt-[6px]">
                <img
                  src="/assets/images/icons/crown-purple.svg"
                  className="w-5 h-5"
                  alt="icon"
                />
                <p className="text-[#838C9D]">Daily Work</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-3">
            <a
              href="manage-course-materi.html"
              className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
            >
              Manage
            </a>
          </div>
        </div>
        <div className="card flex items-center gap-5">
          <div className="flex shrink-0 w-[140px] h-[110px] rounded-[20px] bg-[#D9D9D9] overflow-hidden">
            <img
              src="/assets/images/thumbnails/th-2.png"
              className="w-full h-full object-cover"
              alt="thumbnail"
            />
          </div>
          <div className="w-full">
            <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
              Responsive Design Triclorem Lorem, ipsum dolor.
            </h3>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-[6px] mt-[6px]">
                <img
                  src="/assets/images/icons/profile-2user-purple.svg"
                  className="w-5 h-5"
                  alt="icon"
                />
                <p className="text-[#838C9D]">554 Students</p>
              </div>
              <div className="flex items-center gap-[6px] mt-[6px]">
                <img
                  src="/assets/images/icons/crown-purple.svg"
                  className="w-5 h-5"
                  alt="icon"
                />
                <p className="text-[#838C9D]">Programming</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-3">
            <a
              href="manage-course-materi.html"
              className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
            >
              Manage
            </a>
          </div>
        </div>
        <div className="card flex items-center gap-5">
          <div className="flex shrink-0 w-[140px] h-[110px] rounded-[20px] bg-[#D9D9D9] overflow-hidden">
            <img
              src="/assets/images/thumbnails/th-3.png"
              className="w-full h-full object-cover"
              alt="thumbnail"
            />
          </div>
          <div className="w-full">
            <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
              Company Profile Multilorem Lorem, ipsum dolor.
            </h3>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-[6px] mt-[6px]">
                <img
                  src="/assets/images/icons/profile-2user-purple.svg"
                  className="w-5 h-5"
                  alt="icon"
                />
                <p className="text-[#838C9D]">2,887 Students</p>
              </div>
              <div className="flex items-center gap-[6px] mt-[6px]">
                <img
                  src="/assets/images/icons/crown-purple.svg"
                  className="w-5 h-5"
                  alt="icon"
                />
                <p className="text-[#838C9D]">Marketing</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-3">
            <a
              href="manage-course-materi.html"
              className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
            >
              Manage
            </a>
          </div>
        </div>
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
    </div>
  )
}

export default Courses
