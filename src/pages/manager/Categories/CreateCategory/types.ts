import type { z } from 'zod'
import type { createCategorySchema } from '../../../../utils/schema'

export type TCreateCategory = z.infer<typeof createCategorySchema>
