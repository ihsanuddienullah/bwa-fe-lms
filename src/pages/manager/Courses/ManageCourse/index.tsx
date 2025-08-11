import { Link, useParams } from 'react-router'
import ContentCard from '../_components/ContentCard'
import { DUMMY_COURSE_DETAIL } from '../dummy'

const CourseDetail = () => {
  const courseId = useParams().id

  return (
    <>
      <div
        id="Breadcrumb"
        className="flex items-center gap-5 *:after:content-['/'] *:after:ml-5"
      >
        <span className="last-of-type:after:content-[''] last-of-type:font-semibold">
          Dashboard
        </span>
        <span className="last-of-type:after:content-[''] last-of-type:font-semibold">
          Manage Course
        </span>
        <span className="last-of-type:after:content-[''] last-of-type:font-semibold">
          Details
        </span>
      </div>
      <header className="flex items-center justify-between gap-[30px]">
        <div>
          <h1 className="font-extrabold text-[28px] leading-[42px]">
            Mastering React TypeScript 7 <br />
            Website Development
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
          >
            Edit Course
          </a>
          <Link
            to={`/manager/course/${courseId}/preview`}
            className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
          >
            Preview
          </Link>
        </div>
      </header>
      <section id="CourseInfo" className="flex gap-[50px]">
        <div
          id="Thumbnail"
          className="flex shrink-0 w-[480px] h-[250px] rounded-[20px] bg-[#D9D9D9] overflow-hidden"
        >
          <img
            src="/assets/images/thumbnails/th-4.png"
            className="w-full h-full object-cover"
            alt="thumbnail"
          />
        </div>
        <div className="grid grid-cols-2 gap-5 w-full">
          <div className="flex flex-col rounded-[20px] border border-[#CFDBEF] p-5 gap-4">
            <img
              src="/assets/images/icons/profile-2user-purple.svg"
              className="w-8 h-8"
              alt="icon"
            />
            <p className="font-semibold">12,489 Students</p>
          </div>
          <div className="flex flex-col rounded-[20px] border border-[#CFDBEF] p-5 gap-4">
            <img
              src="/assets/images/icons/crown-purple.svg"
              className="w-8 h-8"
              alt="icon"
            />
            <p className="font-semibold">Programming</p>
          </div>
          <div className="flex flex-col rounded-[20px] border border-[#CFDBEF] p-5 gap-4">
            <img
              src="/assets/images/icons/note-favorite-purple.svg"
              className="w-8 h-8"
              alt="icon"
            />
            <p className="font-semibold">873 Contents</p>
          </div>
          <div className="flex flex-col rounded-[20px] border border-[#CFDBEF] p-5 gap-4">
            <img
              src="/assets/images/icons/cup-purple.svg"
              className="w-8 h-8"
              alt="icon"
            />
            <p className="font-semibold">Certificate</p>
          </div>
        </div>
      </section>
      <section
        id="CourseList"
        className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
      >
        <div className="header flex items-center justify-between">
          <h2 className="font-bold text-[22px] leading-[33px]">
            Course Content
          </h2>
          <Link
            to={`/manager/course/${courseId}/create-content`}
            className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
          >
            Add Content
          </Link>
        </div>
        {DUMMY_COURSE_DETAIL.contents.map((content, index) => (
          <ContentCard
            courseId={courseId ? parseInt(courseId) : 0}
            key={content.id}
            id={content.id}
            title={content.title}
            thumbnail={content.thumbnail}
            type={content.type}
            index={index + 1}
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

export default CourseDetail
