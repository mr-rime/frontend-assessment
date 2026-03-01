import { Orders } from '@/features/admin/components/orders/components'
import { baseSearchSchema, filtersSchema } from '@/shared/schemas/search.schema'
import { createFileRoute } from '@tanstack/react-router'
import { zodValidator } from '@tanstack/zod-adapter'

const orderSearchValidator = zodValidator(
  baseSearchSchema.extend({
    filters: filtersSchema,
  })
)

export const Route = createFileRoute('/(admin)/_admin-layout/admin/orders/')({
  component: Orders,
  validateSearch: orderSearchValidator,
})