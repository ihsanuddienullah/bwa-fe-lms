import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { getCourses } from '../../../api/services/course-service'
import { camelCaseKeys } from '../../../utils/formatter'
import type { IGetCoursesResponse } from '../../../utils/global-types'

const useCustom = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['courses'],
    queryFn: () => getCourses(),
  })

  const courses = useMemo(
    () =>
      (data?.data || []).map((item: IGetCoursesResponse) =>
        camelCaseKeys(item)
      ),
    [data]
  )

  return {
    data: {
      loading: isLoading,
      courses,
    },
    methods: {},
  }
}

export default useCustom
