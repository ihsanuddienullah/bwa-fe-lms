import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useRef, useState, type ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { createStudentSchema } from '../../../../utils/schema'
import type { TCreateStudent } from './types'

const useCustom = () => {
  const [photoPreview, setPhotoPreview] = useState('')

  const inputPhoto = useRef<HTMLInputElement>(null)

  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(createStudentSchema),
  })

  const onSubmit = useCallback((value: TCreateStudent) => {
    console.log(value)
  }, [])

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
