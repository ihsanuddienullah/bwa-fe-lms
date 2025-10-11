import CoursePreviewLayout from './_components/CoursePreviewLayout'
import CoursePreviewText from './_components/CoursePreviewText'
import CoursePreviewVideo from './_components/CoursePreviewVideo'
import useCustom from './hooks'

const CoursePreview = () => {
  const { data, methods } = useCustom()

  return (
    <CoursePreviewLayout
      courseById={data.courseById}
      selectedContent={data.selectedContent}
      handleChoosContent={methods.handleChoosContent}
    >
      <div className="relative flex flex-col gap-[26px]">
        {data.selectedContent?.type === 'video' ? (
          <>
            <CoursePreviewVideo
              selectedContent={data.selectedContent}
              handleMarkContentAsCompleted={
                methods.handleMarkContentAsCompleted
              }
            />
            <CoursePreviewText
              selectedContent={data.selectedContent}
              handleMarkContentAsCompleted={
                methods.handleMarkContentAsCompleted
              }
            />
          </>
        ) : (
          <CoursePreviewText
            selectedContent={data.selectedContent}
            handleMarkContentAsCompleted={methods.handleMarkContentAsCompleted}
          />
        )}
      </div>
    </CoursePreviewLayout>
  )
}

export default CoursePreview
