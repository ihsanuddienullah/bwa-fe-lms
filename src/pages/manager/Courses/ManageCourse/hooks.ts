import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useParams } from 'react-router'
import { getCourseById } from '../../../../api/services/course-service'
import { camelCaseKeys } from '../../../../utils/formatter'
import type { ICourseDetail } from '../types'

const useCustomHook = () => {
  const courseId = useParams().course_id

  const getCourseByIdQuery = useQuery({
    queryKey: ['courses', courseId],
    queryFn: () => getCourseById(courseId || ''),
    enabled: !!courseId,
  })

  const courseById: ICourseDetail = useMemo(
    () => camelCaseKeys(getCourseByIdQuery.data?.data),
    [getCourseByIdQuery.data]
  )

  return {
    data: {
      courseId,
      courseById,
      loadingCourseById: getCourseByIdQuery.isLoading,
    },
    methods: {},
  }
}

export default useCustomHook
