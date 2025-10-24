import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router'
import router from './router'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
