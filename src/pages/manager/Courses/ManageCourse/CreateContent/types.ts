import type { z } from 'zod'
import type { createCourseContentSchema } from '../../../../../utils/schema'

export type TCreateCourseContent = z.infer<typeof createCourseContentSchema>
