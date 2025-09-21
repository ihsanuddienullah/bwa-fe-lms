import { Outlet, useLocation } from 'react-router'
import Header from './Header'
import Sidebar from './Sidebar'

interface LayoutProps {
  userRole: 'manager' | 'student'
  userName: string
}

const Layout = ({ userRole, userName }: LayoutProps) => {
  const location = useLocation()

  if (location.pathname.includes('preview')) return <Outlet />

  return (
    <div className="flex min-h-screen">
      <Sidebar userRole={userRole} />
      <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
        <Header userName={userName} userRole={userRole} />
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
