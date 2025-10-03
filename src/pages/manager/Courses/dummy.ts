import type { ICourseDetail } from './types'

export const DUMMY_COURSE_DETAIL: ICourseDetail = {
  id: '1',
  title: 'Mastering React TypeScript 7 Website Development',
  thumbnail: '/assets/images/thumbnails/th-4.png',
  totalStudents: 12489,
  category: 'Programming',
  totalContents: 873,
  hasCertificate: true,
  contents: [
    {
      id: 1,
      title: 'Install VSCode di Windows',
      type: 'video',
      thumbnail: '/assets/images/thumbnails/cover-video.png',
      orderNumber: 1,
    },
    {
      id: 2,
      title: 'Panduan Fundamental',
      type: 'text',
      thumbnail: '/assets/images/thumbnails/cover-text.png',
      orderNumber: 2,
    },
    {
      id: 3,
      title: 'Panduan Fundamental',
      type: 'text',
      thumbnail: '/assets/images/thumbnails/cover-text.png',
      orderNumber: 3,
    },
    {
      id: 4,
      title: 'Install VSCode di Windows',
      type: 'video',
      thumbnail: '/assets/images/thumbnails/cover-video.png',
      orderNumber: 4,
    },
    {
      id: 5,
      title: 'Install VSCode di Windows',
      type: 'video',
      thumbnail: '/assets/images/thumbnails/cover-video.png',
      orderNumber: 5,
    },
  ],
}
