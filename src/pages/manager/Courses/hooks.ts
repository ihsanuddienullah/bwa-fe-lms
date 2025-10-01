import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { getCourses } from '../../../api/services/course-service'
import { camelCaseKeys } from '../../../utils/formatter'
import type { IGetCoursesResponse } from './types'

const useCustom = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['courseList'],
    queryFn: () => getCourses(),
  })

  const courseList = useMemo(
    () => data?.data.map((item: IGetCoursesResponse) => camelCaseKeys(item)),
    [data]
  )

  return {
    data: {
      loading: isLoading,
      courseList,
    },
    methods: {},
  }
}

export default useCustom
