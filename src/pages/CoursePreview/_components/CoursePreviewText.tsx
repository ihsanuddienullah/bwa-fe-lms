import type { ICourseContent } from '../../manager/Courses/types'

interface CoursePreviewTextProps {
  selectedContent: ICourseContent
  handleMarkContentAsCompleted: (contentId: string) => void
}

const CoursePreviewText = ({
  selectedContent,
  handleMarkContentAsCompleted,
}: CoursePreviewTextProps) => {
  return (
    <>
      <div className="flex flex-col gap-5 max-w-[800px] pb-[160px]">
        {selectedContent.type === 'text' && (
          <h1 className="font-bold text-[32px] leading-[48px]">
            {selectedContent.title}
          </h1>
        )}
        <article
          id="Content-wrapper"
          className="prose"
          dangerouslySetInnerHTML={{ __html: selectedContent.text }}
        />
      </div>
      {selectedContent.type === 'text' && (
        <div className="fixed bottom-0 w-[calc(100%-400px)] h-[151px] flex items-end justify-end pb-5 bg-[linear-gradient(0deg,#FFFFFF_49.67%,rgba(255,255,255,0)_84.11%)]">
          <button
            onClick={() => handleMarkContentAsCompleted(selectedContent.id)}
            type="button"
            className="cursor-pointer w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
          >
            Mark as Completed
          </button>
        </div>
      )}
    </>
  )
}

export default CoursePreviewText
