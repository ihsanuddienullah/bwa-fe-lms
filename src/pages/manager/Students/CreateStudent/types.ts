import type { z } from 'zod'
import type { createStudentSchema } from '../../../../utils/schema'

export type TCreateStudent = z.infer<typeof createStudentSchema>
