import { Outlet, useMatch } from 'react-router'
import Header from './Header'
import Sidebar from './Sidebar'

interface LayoutProps {
  role?: 'manager' | 'student'
}

const Layout = ({ role = 'manager' }: LayoutProps) => {
  if (useMatch('/manager/course/:id/preview')) return <Outlet />

  return (
    <div className="flex min-h-screen">
      <Sidebar role={role} />
      <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
        <Header />
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
