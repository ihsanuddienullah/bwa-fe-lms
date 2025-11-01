import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router'
import {
  createStudent,
  getStudentById,
  updateStudent,
} from '../../../../api/services/student-service'
import { snakeCaseKeys } from '../../../../utils/formatter'
import {
  createStudentSchema,
  updateStudentSchema,
} from '../../../../utils/schema'
import type { TCreateStudent, TUpdateStudent } from './types'

const useCustom = () => {
  const navigate = useNavigate()
  const studentId = useParams().student_id

  const [photoPreview, setPhotoPreview] = useState('')

  const inputPhoto = useRef<HTMLInputElement>(null)

  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(
      studentId ? updateStudentSchema : createStudentSchema
    ),
  })

  const getStudentByIdQuery = useQuery({
    queryKey: ['student', studentId],
    queryFn: () => getStudentById(studentId || ''),
    enabled: !!studentId,
  })

  const createStudentMutation = useMutation({
    mutationFn: (payload: TCreateStudent) => createStudent(payload),
    onSuccess: () => {
      toast.success('Student created successfully')
      navigate('/manager/students')
    },
  })

  const updateStudentMutation = useMutation({
    mutationFn: (payload: TUpdateStudent) =>
      updateStudent(studentId || '', snakeCaseKeys(payload)),
    onSuccess: () => {
      toast.success('Student updated successfully')
      navigate('/manager/students')
    },
  })

  const onSubmit = useCallback(
    async (value: TCreateStudent | TUpdateStudent) => {
      try {
        if (studentId) {
          await updateStudentMutation.mutateAsync(value as TUpdateStudent)
        } else {
          await createStudentMutation.mutateAsync(value as TCreateStudent)
        }
      } catch (error) {
        console.log(error)
      }
    },
    [createStudentMutation, updateStudentMutation, studentId]
  )

  const onPhotoChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const file = event.target.files[0]
        setValue('photo', file, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        })
        setPhotoPreview(URL.createObjectURL(file))
      }
    },
    [setValue]
  )

  const handleDeletePreview = useCallback(() => {
    setValue('photo', null, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    })
    setPhotoPreview('')
    if (inputPhoto.current) {
      inputPhoto.current.value = ''
    }
  }, [setValue, inputPhoto])

  useEffect(() => {
    if (getStudentByIdQuery.data && getStudentByIdQuery.isSuccess) {
      const { name, email, photo, password } = getStudentByIdQuery.data.data

      setValue('name', name)
      setValue('email', email)
      setValue('photo', photo)
      setValue('password', password)

      if (photo) {
        setPhotoPreview(photo)
      }
    }
  }, [getStudentByIdQuery.data, getStudentByIdQuery.isSuccess, setValue])

  return {
    data: {
      formState,
      photoPreview,
      studentId,
      isSubmitting:
        createStudentMutation.isPending || updateStudentMutation.isPending,
    },
    methods: {
      handleDeletePreview,
      handleSubmit,
      onPhotoChange,
      onSubmit,
      register,
      setValue,
    },
    refs: {
      inputPhoto,
    },
  }
}

export default useCustom
