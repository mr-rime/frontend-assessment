import { Orders } from '@/features/admin/components/orders/components'
import { baseSearchSchema } from '@/shared/schemas/search.schema'
import { createFileRoute } from '@tanstack/react-router'
import { fallback, zodValidator } from '@tanstack/zod-adapter'
import * as z from "zod"

const orderSearchValidator = zodValidator(baseSearchSchema.extend({
  status: fallback(z.string().optional(), ''),
}))


export const Route = createFileRoute('/(admin)/_admin-layout/admin/orders/')({
  component: Orders,
  validateSearch: orderSearchValidator,
})