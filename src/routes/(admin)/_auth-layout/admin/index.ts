import { createFileRoute, redirect } from '@tanstack/react-router'


export const Route = createFileRoute('/(admin)/_auth-layout/admin/')({
  beforeLoad: ({ context }) => {
    if (context.adminAuth.isAuthenticated) {
      throw redirect({ to: "/admin/products", search: { page: 1, pageSize: 10, order: 'asc', sortBy: '', filterBy: '', q: '', filters: {} } });
    }
    throw redirect({ to: "/admin/login" });
  }
})