import { useMutation, useQuery } from '@tanstack/react-query'
import { useCallback, useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router'
import {
  deleteCourseContent,
  deleteCourseStudent,
  getCourseById,
} from '../../../../api/services/course-service'
import { AlertConfirmation } from '../../../../components/Alert'
import { camelCaseKeys } from '../../../../utils/formatter'
import type { ICourseDetail } from '../types'

const useCustomHook = () => {
  const courseId = useParams().course_id

  const [selectedWidget, setSetselectedWidget] = useState('student')

  const deleteCourseContentMutation = useMutation({
    mutationFn: (contentId: string) => deleteCourseContent(contentId),
    onSuccess: () => {
      toast.success('Content deleted successfully')
      getCourseByIdQuery.refetch()
    },
  })

  const deleteCourseStudentMutation = useMutation({
    mutationFn: (studentId: string) => {
      const payload = {
        student_id: studentId,
      }

      return deleteCourseStudent(courseId || '', payload)
    },
    onSuccess: () => {
      toast.success('Student deleted successfully')
      getCourseByIdQuery.refetch()
    },
  })

  const getCourseByIdQuery = useQuery({
    queryKey: ['courses', courseId],
    queryFn: () => getCourseById(courseId || ''),
    enabled: !!courseId,
  })

  const courseById: ICourseDetail = useMemo(
    () => camelCaseKeys(getCourseByIdQuery.data?.data),
    [getCourseByIdQuery.data]
  )

  const handleSelectWidget = useCallback((widget: string) => {
    setSetselectedWidget(widget)
  }, [])

  const handleDeleteCourseContent = useCallback(
    async (contentId: string, title: string) => {
      toast(
        (t) => (
          <AlertConfirmation
            t={t}
            handleConfirm={async () => {
              await deleteCourseContentMutation.mutateAsync(String(contentId))
            }}
            title={`Are you sure you want to delete ${title}?`}
          />
        ),
        { duration: 5000 }
      )
    },
    [deleteCourseContentMutation]
  )

  const handleDeleteCourseStudent = useCallback(
    async (studentId: string, name: string) => {
      toast(
        (t) => (
          <AlertConfirmation
            t={t}
            handleConfirm={async () => {
              await deleteCourseStudentMutation.mutateAsync(String(studentId))
            }}
            title={`Are you sure you want to delete ${name}?`}
          />
        ),
        { duration: 5000 }
      )
    },
    [deleteCourseStudentMutation]
  )

  return {
    data: {
      courseId,
      courseById,
      loadingCourseById: getCourseByIdQuery.isLoading,
      selectedWidget,
    },
    methods: {
      handleDeleteCourseContent,
      handleDeleteCourseStudent,
      handleSelectWidget,
    },
  }
}

export default useCustomHook
