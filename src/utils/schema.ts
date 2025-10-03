import { z } from 'zod'

export const signUpSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email('Invalid email address'),
  password: z.string().min(5, 'Password must be at least 5 characters long'),
})

export const signInSchema = signUpSchema.omit({ name: true })

export const createCourseSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  categoryId: z.string().min(1, 'Category is required'),
  description: z.string().min(1, 'Description is required'),
  tagline: z.string().min(1, 'Tagline is required'),
  thumbnail: z
    .any()
    .refine((file) => file?.name, { message: 'Thumbnail is required' }),
})

export const updateCourseSchema = createCourseSchema.extend({
  thumbnail: z.any().optional(),
})
