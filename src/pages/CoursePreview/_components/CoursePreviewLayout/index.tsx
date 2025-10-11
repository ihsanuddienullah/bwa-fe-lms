import { useNavigate } from 'react-router'
import Header from '../../../../components/Header'
import type { ICourseDetail } from '../../../manager/Courses/types'

interface CoursePreviewLayoutProps {
  children: React.ReactNode
  courseById: ICourseDetail
  selectedContent: ICourseDetail['contents'][0]
  handleChoosContent: (content: ICourseDetail['contents'][0]) => void
}

const CoursePreviewLayout = ({
  children,
  courseById,
  selectedContent,
  handleChoosContent,
}: CoursePreviewLayoutProps) => {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen">
      <aside className="sidebar-container fixed h-[calc(100vh-20px)] w-full max-w-[330px] my-[10px] ml-[10px] bg-[#060A23] overflow-hidden flex flex-1 rounded-[20px]">
        <div className="scroll-container flex w-full overflow-y-scroll hide-scrollbar">
          <nav className="flex flex-col w-full h-fit p-[30px] gap-[30px] z-10">
            <div
              onClick={() => navigate(-1)}
              className="font-semibold text-white cursor-pointer w-fit"
            >
              <span>Back</span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex shrink-0 w-[130px] h-[100px] rounded-[14px] bg-[#D9D9D9] overflow-hidden">
                <img
                  src={
                    courseById?.thumbnail ||
                    '/assets/images/thumbnails/th-1.png'
                  }
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </div>
              <h2 className="font-bold text-xl leading-[34px] text-white">
                {courseById?.title || 'Course Title'}
              </h2>
            </div>
            <ul className="flex flex-col gap-4">
              {courseById?.contents?.map((content) => (
                <li key={content.id}>
                  <div
                    onClick={() => handleChoosContent(content)}
                    className={`cursor-pointer flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] ${
                      selectedContent?.id === content.id
                        ? 'bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]'
                        : 'shadow-[-10px_-6px_10px_0_#181A35_inset]'
                    }`}
                  >
                    <img
                      src={`/assets/images/icons/${
                        content.type === 'text' ? 'note' : 'video-play'
                      }-white.svg`}
                      className="w-6 h-6"
                      alt="icon"
                    />
                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">
                      {content.title}
                    </span>
                    {content.isCompleted && <span>✅</span>}
                  </div>
                </li>
              ))}
              <li>
                <a href="course-learning-finished.html">
                  <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                    <img
                      src="/assets/images/icons/tick-circle-white.svg"
                      className="w-6 h-6"
                      alt="icon"
                    />
                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">
                      Finished
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <img
          src="/assets/images/backgrounds/sidebar-glow.png"
          className="absolute object-contain object-bottom bottom-0"
          alt="background"
        />
      </aside>
      <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[340px]">
        <Header />
        {children}
      </main>
    </div>
  )
}

export default CoursePreviewLayout
