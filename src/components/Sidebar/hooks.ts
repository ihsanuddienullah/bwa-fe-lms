import { useCallback, useEffect, useState } from 'react'
import { SIDEBAR_MENU } from '../../utils/constants'

interface UseCustomProps {
  role?: 'manager' | 'student'
}

const useCustom = ({ role = 'manager' }: UseCustomProps) => {
  const [activeMenu, setActiveMenu] = useState('Overview')

  const toggleMenu = useCallback((menu: string) => {
    setActiveMenu(menu)
  }, [])

  useEffect(() => {
    const currentPath = window.location.pathname
    const menuItem = SIDEBAR_MENU(role)
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
