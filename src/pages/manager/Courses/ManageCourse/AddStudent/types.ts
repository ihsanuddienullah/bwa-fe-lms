import type { z } from 'zod'
import type { addCourseStudentSchema } from '../../../../../utils/schema'

export type TAddCourseStudent = z.infer<typeof addCourseStudentSchema>
