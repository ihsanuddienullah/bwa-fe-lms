import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useCallback, useRef, useState, type ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { createStudent } from '../../../../api/services/student-service'
import { createStudentSchema } from '../../../../utils/schema'
import type { TCreateStudent } from './types'

const useCustom = () => {
  const navigate = useNavigate()

  const [photoPreview, setPhotoPreview] = useState('')

  const inputPhoto = useRef<HTMLInputElement>(null)

  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(createStudentSchema),
  })

  const createStudentMutation = useMutation({
    mutationFn: (payload: TCreateStudent) => createStudent(payload),
    onSuccess: () => {
      toast.success('Student created successfully')
    },
  })

  const onSubmit = useCallback(
    async (value: TCreateStudent) => {
      try {
        await createStudentMutation.mutateAsync(value)
        navigate('/manager/students')
      } catch (error) {
        console.log(error)
      }
    },
    [createStudentMutation, navigate]
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

  return {
    data: {
      formState,
      photoPreview,
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
