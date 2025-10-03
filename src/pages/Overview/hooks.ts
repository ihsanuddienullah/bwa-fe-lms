import { useQuery } from '@tanstack/react-query'
import { getCourses } from '../../api/services/course-service'

const useCustom = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['courses'],
    queryFn: () => getCourses(),
  })

  return {
    data: {
      loading: isLoading,
      courses: data?.data,
    },
    methods: {},
  }
}

export default useCustom
