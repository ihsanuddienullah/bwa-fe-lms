import { createBrowserRouter } from 'react-router'
import ManagerHome from '../pages/ManagerHome'
import Pricing from '../pages/Pricing'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ManagerHome />,
  },
  {
    path: '/manager/sign-in',
    element: <SignIn />,
  },
  {
    path: '/manager/sign-up',
    element: <SignUp />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
])

export default router
