import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router'
import secureLocalStorage from 'react-secure-storage'
import { STORAGE_KEY } from '../../utils/constants'

const useCustom = () => {
  const navigate = useNavigate()

  const [profileDropdown, setProfileDropdown] = useState(false)

  const toggleDropdown = useCallback(() => {
    setProfileDropdown(!profileDropdown)
  }, [profileDropdown])

  const handleLogout = useCallback(() => {
    secureLocalStorage.removeItem(STORAGE_KEY)
    navigate('/sign-in')
  }, [navigate])

  return {
    data: {
      profileDropdown,
    },
    methods: {
      handleLogout,
      toggleDropdown,
    },
  }
}

export default useCustom
