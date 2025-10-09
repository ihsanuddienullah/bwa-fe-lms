import CoursePreviewLayout from './_components/CoursePreviewLayout'
import CoursePreviewText from './_components/CoursePreviewText'
import CoursePreviewVideo from './_components/CoursePreviewVideo'

const CoursePreview = () => {
  return (
    <CoursePreviewLayout>
      <div className="relative flex flex-col gap-[26px]">
        <CoursePreviewVideo />
        <CoursePreviewText />
      </div>
    </CoursePreviewLayout>
  )
}

export default CoursePreview
