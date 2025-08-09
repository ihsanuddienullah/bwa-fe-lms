import { createBrowserRouter } from 'react-router'
import Layout from '../components/Layout'
import ManagerHome from '../pages/ManagerHome'
import Pricing from '../pages/Pricing'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import SuccessCheckout from '../pages/SuccessCheckout'

const router = createBrowserRouter([
  {
    path: '/',
    // element: <ManagerHome />,
    element: <SignIn />,
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
  {
    path: '/success-checkout',
    element: <SuccessCheckout />,
  },
  {
    path: '/manager',
    element: <Layout />,
    children: [{ index: true, element: <ManagerHome /> }],
  },
])

export default router
