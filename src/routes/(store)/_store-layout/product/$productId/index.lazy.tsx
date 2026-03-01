import { ProductPage } from '@/features/store/components/product-page/components'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute(
  '/(store)/_store-layout/product/$productId/',
)({
  component: ProductPage,
})