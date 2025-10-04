import { useMutation, useQuery } from '@tanstack/react-query'
import { useCallback, useMemo } from 'react'
import toast from 'react-hot-toast'
import { deleteCourse, getCourses } from '../../../api/services/course-service'

import { AlertConfirmation } from '../../../components/Alert'
import { camelCaseKeys } from '../../../utils/formatter'
import type { IGetCoursesResponse } from '../../../utils/global-types'

const useCustom = () => {
  const { mutateAsync } = useMutation({
    mutationFn: (courseId: string) => deleteCourse(courseId),
  })

  const { data, isLoading, refetch } = useQuery({
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

  const handleDeleteCourse = useCallback(
    async (courseId: number, title: string) => {
      toast(
        (t) => (
          <AlertConfirmation
            t={t}
            handleConfirm={async () => {
              await mutateAsync(String(courseId))
              refetch()
            }}
            title={`Are you sure you want to delete ${title} course?`}
            successLabel="Course deleted successfully"
          />
        ),
        { duration: 5000 }
      )
    },
    [mutateAsync, refetch]
  )

  return {
    data: {
      loading: isLoading,
      courses,
    },
    methods: {
      handleDeleteCourse,
    },
  }
}

export default useCustom
