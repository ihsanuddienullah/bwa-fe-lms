import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { signUpSchema } from './schema'

const useCustom = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = handleSubmit((value) => {
    console.log(value)
  })

  return {
    data: { formState },
    methods: {
      onSubmit,
      register,
    },
  }
}

export default useCustom
