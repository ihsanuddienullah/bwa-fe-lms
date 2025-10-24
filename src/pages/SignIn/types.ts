import type { z } from 'zod'
import { signInSchema } from '../../utils/schema'

export type TSignIn = z.infer<typeof signInSchema>
