import type { z } from 'zod'
import type { createCourseSchema } from '../../../../utils/schema'

export type TCreateCourse = z.infer<typeof createCourseSchema>
