import { StoreFront } from '@/features/store/components/store-front/components/store-front'
import { createFileRoute } from '@tanstack/react-router'
import { zodValidator, fallback } from '@tanstack/zod-adapter'
import * as z from "zod"

const validationSchema = zodValidator(z.object({
    page: fallback(z.number().int().positive().optional(), 1),
    sortBy: fallback(z.string().optional(), 'name'),
    order: fallback(z.enum(['asc', 'desc']).optional(), 'asc'),
    category: fallback(z.array(z.string()).optional(), []),
}))

export const Route = createFileRoute('/(store)/_store-layout/')({
    component: StoreFront,
    validateSearch: validationSchema,
})