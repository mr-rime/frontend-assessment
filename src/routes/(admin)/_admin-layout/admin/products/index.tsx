import { Products } from '@/features/admin/components/products/components'
import { baseSearchSchema } from '@/shared/schemas/search.schema'
import { createFileRoute } from '@tanstack/react-router'
import { zodValidator } from '@tanstack/zod-adapter'


const productSearchValidator = zodValidator(baseSearchSchema)

export const Route = createFileRoute('/(admin)/_admin-layout/admin/products/')({
  component: Products,
  validateSearch: productSearchValidator,
})
