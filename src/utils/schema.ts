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

export const createCourseContentSchema = z
  .object({
    title: z.string().min(1, 'Title is required'),
    type: z.string().min(1, 'Type is required'),
    youtubeId: z.string().optional(),
    text: z.string().optional(),
    courseId: z.string().optional(),
    isCompleted: z.boolean().optional(),
  })
  .superRefine((values, ctx) => {
    if (values.type === 'video' && !values.youtubeId) {
      ctx.addIssue({
        code: 'custom',
        message: 'YouTube ID is required',
        path: ['youtubeId'],
      })
    }

    if (values.type === 'text' && !values.text) {
      ctx.addIssue({
        code: 'custom',
        message: 'Text is required',
        path: ['text'],
      })
    }
  })

export const createStudentSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email('Invalid email address'),
  password: z.string().min(5, 'Password must be at least 5 characters long'),
  photo: z.any().refine((file) => file?.name, { message: 'Photo is required' }),
})
