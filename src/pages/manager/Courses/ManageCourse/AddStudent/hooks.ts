import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router'
import {
  addCourseStudent,
  getStudents,
} from '../../../../../api/services/student-service'
import { camelCaseKeys, snakeCaseKeys } from '../../../../../utils/formatter'
import { addCourseStudentSchema } from '../../../../../utils/schema'
import type { IStudent } from '../../types'
import type { TAddCourseStudent } from './types'

const useCustom = () => {
  const courseId = useParams().course_id
  const navigate = useNavigate()

  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(addCourseStudentSchema),
  })

  const addCourseStudentMutation = useMutation({
    mutationFn: (payload: TAddCourseStudent) =>
      addCourseStudent(courseId || '', snakeCaseKeys(payload)),
    onSuccess: () => {
      toast.success('Student added successfully')
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

  const onSubmit = useCallback(
    async (value: TAddCourseStudent) => {
      try {
        await addCourseStudentMutation.mutateAsync(value)
        navigate(-1)
      } catch (error) {
        console.log(error)
      }
    },
    [addCourseStudentMutation, navigate]
  )

  return {
    data: {
      formState,
      students,
    },
    methods: {
      register,
      handleSubmit,
      onSubmit,
    },
  }
}

export default useCustom
