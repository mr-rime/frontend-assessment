import { createFileRoute } from '@tanstack/react-router'
import { StoreFront } from '@/features/store/components/store-front/components/store-front'

export const Route = createFileRoute('/(store)/_store-layout/')({
    component: StoreFront,
})