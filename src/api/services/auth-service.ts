import type { TSignIn } from '../../pages/SignIn/types'
import type { TSignUp } from '../../pages/SignUp/types'
import { apiInstance } from '../axios'

export const signUp = (data: TSignUp) =>
  apiInstance.post('/sign-up', data).then((res) => res.data)

export const signIn = (data: TSignIn) =>
  apiInstance.post('/sign-in', data).then((res) => res.data)
