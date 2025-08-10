import { useCallback, useState } from 'react'

const useCustom = () => {
  const [activeMenu, setActiveMenu] = useState('Overview')

  const toggleMenu = useCallback((menu: string) => {
    setActiveMenu(menu)
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
