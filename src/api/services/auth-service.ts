import type { TSignUp } from '../../pages/SignUp/types'
import apiInstance from '../axios'

export const signUp = (data: TSignUp) =>
  apiInstance.post('/sign-up', data).then((res) => res.data)
