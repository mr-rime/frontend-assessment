import { Orders } from '@/features/admin/components/orders/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/_admin-layout/admin/orders/')({
  component: Orders,
})