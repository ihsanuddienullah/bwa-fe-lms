import { useState } from 'react'

const useCustom = () => {
  const [profileDropdown, setProfileDropdown] = useState(false)

  const toggleDropdown = () => {
    setProfileDropdown(!profileDropdown)
  }

  return {
    data: {
      profileDropdown,
    },
    methods: {
      toggleDropdown,
    },
  }
}

export default useCustom
