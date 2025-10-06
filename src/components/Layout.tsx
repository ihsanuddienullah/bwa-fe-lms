import { Outlet, useLoaderData, useLocation } from 'react-router'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
  const location = useLocation()
  const userData = useLoaderData()

  if (location.pathname.includes('preview')) return <Outlet />

  return (
    <div className="flex min-h-screen">
      <Sidebar userRole={userData.role} />
      <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
        <Header />
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
