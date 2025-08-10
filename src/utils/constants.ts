interface MenuItem {
  title: string
  path: string
  icon: string
  isActive?: boolean
}

interface MenuSection {
  title: string
  items: MenuItem[]
}

export const SIDEBAR_MENU: MenuSection[] = [
  {
    title: 'GENERAL',
    items: [
      {
        title: 'Overview',
        path: '/manager',
        icon: '/assets/images/icons/3dcube-white.svg',
        isActive: true,
      },
      {
        title: 'Courses',
        path: '/manager/courses',
        icon: '/assets/images/icons/note-favorite-white.svg',
      },
      {
        title: 'Categories',
        path: '/categories',
        icon: '/assets/images/icons/crown-white.svg',
      },
      {
        title: 'Students',
        path: '/students',
        icon: '/assets/images/icons/profile-2user-white.svg',
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
      },
      {
        title: 'Rewards',
        path: '/rewards',
        icon: '/assets/images/icons/cup-white.svg',
      },
      {
        title: 'Settings',
        path: '/settings',
        icon: '/assets/images/icons/setting-2-white.svg',
      },
    ],
  },
]
