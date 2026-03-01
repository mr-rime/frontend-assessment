import { Login } from '@/features/store/components/auth/components/login'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/(store)/_store-layout/login/')({
  beforeLoad: ({ context }) => {
    if (context.userAuth.isAuthenticated) {
      throw redirect({
        to: '/',
        search: {
          page: 1,
          order: 'asc',
          sortBy: 'name',
          category: [],
          q: ''
        },
      })
    }
  },
  component: Login,
})