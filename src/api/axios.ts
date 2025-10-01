import axios from 'axios'
import secureLocalStorage from 'react-secure-storage'
import { STORAGE_KEY } from '../utils/constants'
import type { IStorageKey } from '../utils/global-types'

const baseURL = `${import.meta.env.VITE_API_BASE_URL}/api`

export const apiInstance = axios.create({
  baseURL,
  timeout: 3000,
})

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
