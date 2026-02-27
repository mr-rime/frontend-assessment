import { Products } from '@/features/admin/components/products/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/_admin-layout/admin/products/')({
  component: Products,
})
