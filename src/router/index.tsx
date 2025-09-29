import { createBrowserRouter, redirect } from 'react-router'
import secureLocalStorage from 'react-secure-storage'
import Layout from '../components/Layout'
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
import { STORAGE_KEY } from '../utils/constants'
import type { IStorageKey } from '../utils/global-types'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
    loader: () => {
      const userData = secureLocalStorage.getItem(STORAGE_KEY) as IStorageKey

      if (userData) {
        if (userData.role === 'manager') {
          throw redirect('/manager/overview')
        } else {
          throw redirect('/student/overview')
        }
      }

      return null
    },
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
    loader: () => {
      const userData = secureLocalStorage.getItem(STORAGE_KEY) as IStorageKey

      if (!userData || userData.role !== 'manager') {
        throw redirect('/sign-in')
      }

      return userData
    },
    element: <Layout userRole={'manager'} userName={'Ihsan'} />,
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
    loader: () => {
      const userData = secureLocalStorage.getItem(STORAGE_KEY) as IStorageKey

      if (!userData || userData.role !== 'student') {
        throw redirect('/sign-in')
      }

      return userData
    },
    element: <Layout userRole={'student'} userName={'Ihsan'} />,
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
