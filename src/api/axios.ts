import axios from 'axios'
import toast from 'react-hot-toast'
import secureLocalStorage from 'react-secure-storage'
import { STORAGE_KEY } from '../utils/constants'
import type { IStorageKey } from '../utils/global-types'

const baseURL = `${import.meta.env.VITE_API_BASE_URL}/api`

export const apiInstance = axios.create({
  baseURL,
  timeout: 3000,
})

apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 500) {
      toast.error(error.response.data.message || 'Internal Server Error')
    }

    return Promise.reject(error)
  }
)

export const apiInstanceAuth = axios.create({
  baseURL,
  timeout: 3000,
})

apiInstanceAuth.interceptors.request.use((config) => {
  const session = secureLocalStorage.getItem(STORAGE_KEY) as IStorageKey

  if (!session) {
    return config
  }

  config.headers.Authorization = `JWT ${session.token}`

  return config
})

apiInstanceAuth.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.data.message.includes('expired')) {
      const duration = 5000
      toast.error('Session expired. Please sign in again.', { duration })

      setTimeout(() => {
        secureLocalStorage.removeItem(STORAGE_KEY)
        window.location.assign('/sign-in')
      }, duration)
    }

    if (error.response.status === 500) {
      toast.error(error.response.data.message || 'Internal Server Error')
    }

    return Promise.reject(error)
  }
)
