import { createBrowserRouter } from 'react-router'
import Layout from '../components/Layout'
import Courses from '../pages/manager/Courses'
import Overview from '../pages/manager/Overview'
import Pricing from '../pages/Pricing'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import SuccessCheckout from '../pages/SuccessCheckout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Overview />,
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
    children: [
      { index: true, element: <Overview /> },
      {
        path: 'courses',
        element: <Courses />,
      },
    ],
  },
])

export default router
