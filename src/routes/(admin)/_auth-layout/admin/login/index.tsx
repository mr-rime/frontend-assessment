import { LoginAdmin } from '@/features/admin/components/auth/components'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/_auth-layout/admin/login/')({
  beforeLoad: ({ context }) => {
    if (context.adminAuth.isAuthenticated) {
      throw redirect({
        to: '/admin/products',
        search: { page: 1, pageSize: 10, order: 'asc', sortBy: '', filterBy: '', q: '', filters: {} }
      })
    }
  },
  component: LoginAdmin,
})