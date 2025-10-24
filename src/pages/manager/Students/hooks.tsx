import { useMutation, useQuery } from '@tanstack/react-query'
import { useCallback, useMemo } from 'react'
import toast from 'react-hot-toast'
import {
  deleteStudent,
  getStudents,
} from '../../../api/services/student-service'
import { AlertConfirmation } from '../../../components/Alert'
import { camelCaseKeys } from '../../../utils/formatter'
import type { IStudent } from './types'

const useCustom = () => {
  const { mutateAsync } = useMutation({
    mutationFn: (studentId: string) => deleteStudent(studentId),
    onSuccess: () => {
      toast.success('Student deleted successfully')
      getStudentsQuery.refetch()
    },
  })

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

  const handleDeleteStudent = useCallback(
    async (studentId: string, name: string) => {
      toast(
        (t) => (
          <AlertConfirmation
            t={t}
            handleConfirm={async () => {
              await mutateAsync(String(studentId))
            }}
            title={`Are you sure you want to delete ${name}?`}
          />
        ),
        { duration: 5000 }
      )
    },
    [mutateAsync]
  )

  return {
    data: {
      students,
      loading: getStudentsQuery.isLoading,
    },
    methods: {
      handleDeleteStudent,
    },
  }
}

export default useCustom
