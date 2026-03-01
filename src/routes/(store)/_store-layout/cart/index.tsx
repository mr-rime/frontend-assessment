import { Cart } from '@/features/store/components/cart/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(store)/_store-layout/cart/')({
    component: Cart,
})
