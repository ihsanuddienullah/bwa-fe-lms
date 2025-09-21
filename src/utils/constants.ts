interface MenuItem {
  title: string
  path: string
  icon: string
  roles: string[]
}

interface MenuSection {
  title: string
  items: MenuItem[]
}

export const STORAGE_KEY = 'STORAGE_KEY'

export const ROLES = {
  MANAGER: 'manager',
  STUDENT: 'student',
}

export const SIDEBAR_MENU = (
  role: 'manager' | 'student' = 'manager'
): MenuSection[] => [
  {
    title: 'GENERAL',
    items: [
      {
        title: 'Overview',
        path: `/${role}/overview`,
        icon: '/assets/images/icons/3dcube-white.svg',
        roles: [ROLES.MANAGER, ROLES.STUDENT],
      },
      {
        title: 'Courses',
        path: '/manager/courses',
        icon: '/assets/images/icons/note-favorite-white.svg',
        roles: [ROLES.MANAGER],
      },
      {
        title: 'Categories',
        path: '/categories',
        icon: '/assets/images/icons/crown-white.svg',
        roles: [ROLES.MANAGER],
      },
      {
        title: 'Students',
        path: '/manager/students',
        icon: '/assets/images/icons/profile-2user-white.svg',
        roles: [ROLES.MANAGER],
      },
    ],
  },
  {
    title: 'OTHERS',
    items: [
      {
        title: 'Subscription',
        path: '/subscription',
        icon: '/assets/images/icons/security-card-white.svg',
        roles: [ROLES.MANAGER, ROLES.STUDENT],
      },
      {
        title: 'Rewards',
        path: '/rewards',
        icon: '/assets/images/icons/cup-white.svg',
        roles: [ROLES.MANAGER, ROLES.STUDENT],
      },
      {
        title: 'Settings',
        path: '/settings',
        icon: '/assets/images/icons/setting-2-white.svg',
        roles: [ROLES.MANAGER, ROLES.STUDENT],
      },
    ],
  },
]
