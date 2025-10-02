import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { getCategories } from '../../../../api/services/course-service'
import type { IGetCategoriesResponse } from '../../../../utils/global-types'

const useCustom = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
  })

  const categories = useMemo(
    () => (data?.data || []).map((item: IGetCategoriesResponse) => item),
    [data]
  )

  return {
    data: {
      categories,
      loading: isLoading,
    },
    methods: {},
  }
}

export default useCustom
