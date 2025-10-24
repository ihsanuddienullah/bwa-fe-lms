import type { z } from 'zod'
import type {
  createCourseSchema,
  updateCourseSchema,
} from '../../../../utils/schema'

export type TCreateCourse = z.infer<typeof createCourseSchema>

export type TUpdateCourse = z.infer<typeof updateCourseSchema>
