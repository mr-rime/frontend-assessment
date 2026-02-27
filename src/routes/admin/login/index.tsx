import { Login } from '@/features/admin/login'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/login/')({
  component: Login,
})