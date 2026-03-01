import { Cart } from '@/features/store/components/cart/components'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(store)/_store-layout/cart/')({
    component: Cart,
})
