import { ProductPage } from '@/features/store/components/product-page/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(store)/_store-layout/product/$productId/',
)({
  component: ProductPage,
})