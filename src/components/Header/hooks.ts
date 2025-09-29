import { useCallback, useState } from 'react'
import secureLocalStorage from 'react-secure-storage'
import { STORAGE_KEY } from '../../utils/constants'

const useCustom = () => {
  const [profileDropdown, setProfileDropdown] = useState(false)

  const toggleDropdown = useCallback(() => {
    setProfileDropdown(!profileDropdown)
  }, [profileDropdown])

  const handleLogout = useCallback(() => {
    secureLocalStorage.removeItem(STORAGE_KEY)
    window.location.assign('/sign-in')
  }, [])

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
