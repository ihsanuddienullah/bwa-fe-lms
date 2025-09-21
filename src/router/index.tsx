import { createBrowserRouter } from 'react-router'
import ProtectedRoute from '../components/ProtectedRoute'
import {
  CourseDetail,
  CoursePreview,
  Courses,
  CreateContent,
  CreateCourse,
  Overview,
  PaymentStatus,
  Pricing,
  SignIn,
  SignUp,
  Students,
} from '../pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
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
    path: '/payment-status',
    element: <PaymentStatus />,
  },
  {
    path: '/manager',
    element: <ProtectedRoute />,
    children: [
      { path: '/manager/overview', element: <Overview role="manager" /> },
      {
        path: '/manager/courses',
        element: <Courses />,
      },
      {
        path: '/manager/courses/create-course',
        element: <CreateCourse />,
      },
      {
        path: '/manager/course/:course_id',
        element: <CourseDetail />,
      },
      {
        path: '/manager/course/:course_id/preview',
        element: <CoursePreview />,
      },
      {
        path: '/manager/course/:course_id/create-content',
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
    element: <ProtectedRoute />,
    children: [
      { path: '/student/overview', element: <Overview role="student" /> },
      {
        path: '/student/course/:id/preview',
        element: <CoursePreview />,
      },
    ],
  },
])

export default router
