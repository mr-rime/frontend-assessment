import { Register } from '@/features/store/components/auth/register'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(store)/register/')({
  component: Register,
})