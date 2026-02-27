import { LoginAdmin } from '@/features/admin/components/auth/login-admin'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/login/')({
  component: LoginAdmin,
})