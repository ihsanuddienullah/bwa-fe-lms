import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { getCourses } from '../../api/services/course-service'
import { getOverview } from '../../api/services/overview-service'
import { useGetUserData } from '../../utils/custom-hooks'
import { camelCaseKeys } from '../../utils/formatter'
import type { IOverview } from './types'

const useCustom = () => {
  const { role } = useGetUserData()

  const getOverviewQuery = useQuery({
    queryKey: ['overview'],
    queryFn: () => getOverview(),
    enabled: role === 'manager',
  })

  const overviewData: IOverview = useMemo(
    () => camelCaseKeys(getOverviewQuery.data?.data),
    [getOverviewQuery.data?.data]
  )

  const getCoursesQuery = useQuery({
    queryKey: ['courses'],
    queryFn: () => getCourses(),
  })

  return {
    data: {
      overviewData,
      coursesLoading: getCoursesQuery.isLoading,
      courses: getCoursesQuery.data?.data || [],
    },
    methods: {},
  }
}

export default useCustom
