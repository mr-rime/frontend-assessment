import { Customers } from '@/features/admin/components/customers/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/_admin-layout/admin/customers/')(
  {
    component: Customers,
  },
)