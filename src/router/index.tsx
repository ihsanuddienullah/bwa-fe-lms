import { createBrowserRouter, redirect } from 'react-router'
import secureLocalStorage from 'react-secure-storage'
import Layout from '../components/Layout'
import {
  AddStudent,
  CourseDetail,
  CoursePreview,
  Courses,
  CreateContent,
  CreateCourse,
  CreateStudent,
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
    element: <Layout />,
    children: [
      {
        index: true,
        loader: () => redirect('/manager/overview'), // redirect to first child
      },
      {
        path: 'overview',
        element: <Overview role="manager" />,
      },
      {
        path: 'courses',
        element: <Courses />,
      },
      {
        path: 'courses/create',
        element: <CreateCourse />,
      },
      {
        path: 'courses/edit/:course_id',
        element: <CreateCourse />,
      },
      {
        path: 'courses/:course_id',
        element: <CourseDetail />,
      },
      {
        path: 'courses/:course_id/preview',
        element: <CoursePreview />,
      },
      {
        path: 'courses/:course_id/content/create',
        element: <CreateContent />,
      },
      {
        path: 'courses/:course_id/content/edit/:content_id',
        element: <CreateContent />,
      },
      {
        path: 'courses/:course_id/student/add',
        element: <AddStudent />,
      },
      {
        path: 'students',
        element: <Students />,
      },
      {
        path: 'students/create',
        element: <CreateStudent />,
      },
      {
        path: 'students/edit/:student_id',
        element: <CreateStudent />,
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
    element: <Layout />,
    children: [
      {
        index: true,
        loader: () => redirect('/student/overview'), // redirect to first child
      },
      {
        index: true,
        path: 'overview',
        element: <Overview role="student" />,
      },
      {
        path: 'courses/:course_id/preview',
        element: <CoursePreview />,
      },
    ],
  },
])

export default router
