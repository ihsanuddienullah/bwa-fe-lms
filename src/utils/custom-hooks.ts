import secureLocalStorage from 'react-secure-storage'
import { STORAGE_KEY } from './constants'
import type { IStorageKey } from './global-types'

export const useGetUserData = () => {
  const userData = secureLocalStorage.getItem(STORAGE_KEY) as IStorageKey

  return userData
}
