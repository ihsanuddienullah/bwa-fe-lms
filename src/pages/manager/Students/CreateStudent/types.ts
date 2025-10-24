import type { z } from 'zod'
import type {
  createStudentSchema,
  updateStudentSchema,
} from '../../../../utils/schema'

export type TCreateStudent = z.infer<typeof createStudentSchema>

export type TUpdateStudent = z.infer<typeof updateStudentSchema>
