import { createBrowserRouter } from 'react-router'
import ManagerHome from '../pages/ManagerHome'
import SignIn from '../pages/SignIn'

const router = createBrowserRouter([
  {
    path: '/manager/sign-in',
    element: <ManagerHome />,
  },
  {
    path: '/',
    element: <SignIn />,
  },
])

export default router
