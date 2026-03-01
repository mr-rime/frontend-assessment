import { createFileRoute } from '@tanstack/react-router'
import { StoreFront } from '@/features/store/components/store-front/components/store-front'

import { zodValidator } from '@tanstack/zod-adapter'
import * as z from "zod"

const storeSearchSchema = zodValidator(z.object({
    page: z.number().int().positive().optional(),
    sortBy: z.string().optional(),
    order: z.enum(['asc', 'desc']).optional(),
    category: z.array(z.string()).optional(),
    q: z.string().optional(),
}))

export const Route = createFileRoute('/(store)/_store-layout/')({
    component: StoreFront,
    validateSearch: storeSearchSchema,
})