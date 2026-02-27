import { Login } from '@/features/store/components/auth/login'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login/')({
  component: Login,
})