import { Customers } from '@/features/admin/components/customers/components'
import { baseSearchSchema, filtersSchema } from '@/shared/schemas/search.schema'
import { createFileRoute } from '@tanstack/react-router'
import { zodValidator } from '@tanstack/zod-adapter'

const customerSearchValidator = zodValidator(
  baseSearchSchema.extend({
    filters: filtersSchema,
  })
)

export const Route = createFileRoute('/(admin)/_admin-layout/admin/customers/')(
  {
    component: Customers,
    validateSearch: customerSearchValidator,
  },
)