import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { getStudents } from '../../../api/services/student-service'
import { camelCaseKeys } from '../../../utils/formatter'
import type { IStudent } from './types'

const useCustom = () => {
  const getStudentsQuery = useQuery({
    queryKey: ['students'],
    queryFn: () => getStudents(),
  })

  const students = useMemo(
    () =>
      (getStudentsQuery.data?.data || []).map((item: IStudent) =>
        camelCaseKeys(item)
      ),
    [getStudentsQuery.data]
  )

  return {
    data: {
      students,
      loading: getStudentsQuery.isLoading,
    },
    methods: {},
  }
}

export default useCustom
