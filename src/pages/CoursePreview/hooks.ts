import { useMutation, useQuery } from '@tanstack/react-query'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router'
import {
  getCourseById,
  updateCourseContent,
} from '../../api/services/course-service'
import { camelCaseKeys, snakeCaseKeys } from '../../utils/formatter'
import type { TCreateCourseContent } from '../manager/Courses/ManageCourse/CreateContent/types'
import type { ICourseContent, ICourseDetail } from '../manager/Courses/types'

const useCustom = () => {
  const courseId = useParams().course_id

  const [selectedContent, setSelectedContent] = useState({} as ICourseContent)

  const getCourseByIdQuery = useQuery({
    queryKey: ['courses', courseId],
    queryFn: () => getCourseById(courseId || ''),
    enabled: !!courseId,
  })

  const updateCourseContentMutation = useMutation({
    mutationFn: ({
      contentId,
      payload,
    }: {
      contentId: string
      payload: TCreateCourseContent
    }) => updateCourseContent(contentId || '', snakeCaseKeys(payload)),
    onSuccess: () => {
      getCourseByIdQuery.refetch()
    },
  })

  const courseById: ICourseDetail = useMemo(
    () => camelCaseKeys(getCourseByIdQuery.data?.data),
    [getCourseByIdQuery.data]
  )

  const handleChoosContent = useCallback((content: ICourseContent) => {
    setSelectedContent(content)
  }, [])

  const handleMarkContentAsCompleted = useCallback(
    async (contentId: string) => {
      const payload: TCreateCourseContent = {
        ...selectedContent,
        isCompleted: true,
      }

      await updateCourseContentMutation.mutateAsync({ contentId, payload })
    },
    [selectedContent, updateCourseContentMutation]
  )

  useEffect(() => {
    if (courseById?.contents && courseById?.contents?.length > 0) {
      const latestCompleted = courseById.contents.filter(
        (content) => !content.isCompleted
      )

      if (latestCompleted.length > 0) {
        setSelectedContent(latestCompleted.at(0) as ICourseContent)
      } else {
        setSelectedContent(courseById.contents[0] as ICourseContent)
      }
    }
  }, [courseById])

  return {
    data: {
      courseById,
      selectedContent,
    },
    methods: {
      handleChoosContent,
      handleMarkContentAsCompleted,
    },
  }
}

export default useCustom
