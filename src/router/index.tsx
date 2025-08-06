import { createBrowserRouter } from 'react-router'
import ManagerHome from '../pages/ManagerHome'
import SignIn from '../pages/SignIn'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ManagerHome />,
  },
  {
    path: '/manager/sign-in',
    element: <SignIn />,
  },
])

export default router
