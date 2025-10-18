import { useQuery } from '@tanstack/react-query'
import { getCourses } from '../../api/services/course-service'
import { getStudents } from '../../api/services/student-service'
import { useGetUserData } from '../../utils/custom-hooks'

const useCustom = () => {
  const { role } = useGetUserData()

  const getCoursesQuery = useQuery({
    queryKey: ['courses'],
    queryFn: () => getCourses(),
  })

  const getStudentsQuery = useQuery({
    queryKey: ['students'],
    queryFn: () => getStudents(),
    enabled: role === 'manager',
  })

  return {
    data: {
      coursesLoading: getCoursesQuery.isLoading,
      courses: getCoursesQuery.data?.data || [],
      studentsLoading: getStudentsQuery.isLoading,
      students: getStudentsQuery.data?.data || [],
    },
    methods: {},
  }
}

export default useCustom
