import { createBrowserRouter } from 'react-router'
import Layout from '../components/Layout'
import {
  CourseDetail,
  Courses,
  CreateContent,
  CreateCourse,
  Overview,
  Pricing,
  SignIn,
  SignUp,
  SuccessCheckout,
} from '../pages'

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
      {
        path: 'courses/create-course',
        element: <CreateCourse />,
      },
      {
        path: 'course/:id',
        element: <CourseDetail />,
      },
      {
        path: 'course/:id/create-content',
        element: <CreateContent />,
      },
    ],
  },
])

export default router
