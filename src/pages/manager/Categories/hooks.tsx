import { useMutation, useQuery } from '@tanstack/react-query'
import { useCallback } from 'react'
import toast from 'react-hot-toast'
import {
  deleteCategory,
  getCategories,
} from '../../../api/services/course-service'
import { AlertConfirmation } from '../../../components/Alert'

const useCustom = () => {
  const { mutateAsync } = useMutation({
    mutationFn: (categoryId: string) => deleteCategory(categoryId),
    onSuccess: () => {
      toast.success('Student deleted successfully')
      getCategoriesQuery.refetch()
    },
  })

  const getCategoriesQuery = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
  })

  const handleDeleteCategory = useCallback(
    async (categoryId: string, name: string) => {
      toast(
        (t) => (
          <AlertConfirmation
            t={t}
            handleConfirm={async () => {
              await mutateAsync(String(categoryId))
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
      categories: getCategoriesQuery.data?.data || [],
      loading: getCategoriesQuery.isLoading,
    },
    methods: {
      handleDeleteCategory,
    },
  }
}

export default useCustom
