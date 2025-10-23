import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { getCourses } from '../../api/services/course-service'
import { getOverview } from '../../api/services/overview-service'
import { getStudents } from '../../api/services/student-service'
import { useGetUserData } from '../../utils/custom-hooks'
import { camelCaseKeys } from '../../utils/formatter'
import type { IOverview } from './types'

const useCustom = () => {
  const { role } = useGetUserData()

  const getOverviewQuery = useQuery({
    queryKey: ['overview'],
    queryFn: () => getOverview(),
  })

  const overviewData: IOverview = useMemo(
    () => camelCaseKeys(getOverviewQuery.data?.data),
    [getOverviewQuery.data?.data]
  )

  const getCoursesQuery = useQuery({
    queryKey: ['courses'],
    queryFn: () => getCourses(),
  })

  const getStudentsQuery = useQuery({
    queryKey: ['students'],
    queryFn: () => getStudents(),
    enabled: role === 'manager',
  })

  return {
    data: {
      overviewData,
      coursesLoading: getCoursesQuery.isLoading,
      courses: getCoursesQuery.data?.data || [],
      studentsLoading: getStudentsQuery.isLoading,
      students: getStudentsQuery.data?.data || [],
    },
    methods: {},
  }
}

export default useCustom
