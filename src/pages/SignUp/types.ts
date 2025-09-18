import type { z } from 'zod'
import type { signUpSchema } from './schema'

export type TSignUp = z.infer<typeof signUpSchema>
