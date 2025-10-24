import type { z } from 'zod'
import { signUpSchema } from '../../utils/schema'

export type TSignUp = z.infer<typeof signUpSchema>
