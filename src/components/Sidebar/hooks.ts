import { useCallback, useEffect, useState } from 'react'
import { SIDEBAR_MENU } from '../../utils/constants'

interface UseCustomProps {
  userRole?: 'manager' | 'student'
}

const useCustom = ({ userRole = 'manager' }: UseCustomProps) => {
  const [activeMenu, setActiveMenu] = useState('Overview')

  const toggleMenu = useCallback((menu: string) => {
    setActiveMenu(menu)
  }, [])

  useEffect(() => {
    const currentPath = window.location.pathname
    const menuItem = SIDEBAR_MENU(userRole)
      .flatMap((section) => section.items)
      .find((item) => item.path === currentPath)

    if (menuItem) {
      setActiveMenu(menuItem.title) // Set the active menu based on the current path
    }
  }, [])

  return {
    data: {
      activeMenu,
    },
    methods: {
      toggleMenu,
    },
  }
}

export default useCustom
