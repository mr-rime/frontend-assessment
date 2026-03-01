import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/_auth-layout/admin/')({
  beforeLoad: () => {
    throw redirect({ to: "/admin/login" });
  }
})