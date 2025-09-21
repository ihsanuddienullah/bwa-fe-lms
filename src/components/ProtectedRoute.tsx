import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../utils/custom-hooks'
import Layout from './Layout'

const ProtectedRoute = () => {
  const navigate = useNavigate()
  const userData = useAuth()

  useEffect(() => {
    if (userData) {
      if (
        userData.role === 'manager' &&
        !window.location.pathname.includes('/manager')
      ) {
        navigate('/manager/overview')
      }

      if (
        userData.role === 'student' &&
        !window.location.pathname.includes('/student')
      ) {
        navigate('/student/overview')
      }
    } else {
      navigate('/sign-in')
    }
  }, [navigate, userData])

  return <Layout userRole={userData?.role} userName={userData?.name} />
}

export default ProtectedRoute
