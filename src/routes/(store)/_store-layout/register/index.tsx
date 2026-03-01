import { Register } from '@/features/store/components/auth/components/register'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/(store)/_store-layout/register/')({
  beforeLoad: ({ context }) => {
    if (context.userAuth.isAuthenticated) {
      throw redirect({
        to: '/',
        search: {
          page: 1,
          order: 'asc',
          sortBy: 'name',
          category: [],
          q: '',
        },
      })
    }
  },
  component: Register,
})