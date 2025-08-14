import { createBrowserRouter } from 'react-router'
import Layout from '../components/Layout'
import {
  CourseDetail,
  CoursePreview,
  Courses,
  CreateContent,
  CreateCourse,
  ManagerOverview,
  Pricing,
  SignIn,
  SignUp,
  StudentOverview,
  Students,
  SuccessCheckout,
} from '../pages'

const router = createBrowserRouter([
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
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
      { index: true, element: <ManagerOverview /> },
      {
        path: '/manager/courses',
        element: <Courses />,
      },
      {
        path: '/manager/courses/create-course',
        element: <CreateCourse />,
      },
      {
        path: '/manager/course/:id',
        element: <CourseDetail />,
      },
      {
        path: '/manager/course/:id/preview',
        element: <CoursePreview />,
      },
      {
        path: '/manager/course/:id/create-content',
        element: <CreateContent />,
      },
      {
        path: '/manager/students',
        element: <Students />,
      },
    ],
  },
  {
    path: '/student',
    element: <Layout role="student" />,
    children: [{ index: true, element: <StudentOverview /> }],
  },
])

export default router
