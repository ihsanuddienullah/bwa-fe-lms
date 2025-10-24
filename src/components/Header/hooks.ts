import { useCallback, useState } from 'react'
import secureLocalStorage from 'react-secure-storage'
import { STORAGE_KEY } from '../../utils/constants'
import { useGetUserData } from '../../utils/custom-hooks'

const useCustom = () => {
  const userData = useGetUserData()

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
      userData,
    },
    methods: {
      handleLogout,
      toggleDropdown,
    },
  }
}

export default useCustom
