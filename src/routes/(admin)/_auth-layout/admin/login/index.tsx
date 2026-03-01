import { LoginAdmin } from '@/features/admin/components/auth/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/_auth-layout/admin/login/')({
  component: LoginAdmin,
})