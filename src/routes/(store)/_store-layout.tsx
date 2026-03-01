import { StoreLayout } from '@/layouts/store-layout'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { zodValidator, fallback } from '@tanstack/zod-adapter'
import * as z from "zod"

const validationSchema = zodValidator(z.object({
    page: fallback(z.number().int().positive().optional(), 1),
    sortBy: fallback(z.string().optional(), 'name'),
    order: fallback(z.enum(['asc', 'desc']).optional(), 'asc'),
    category: fallback(z.array(z.string()).optional(), []),
    q: fallback(z.string().optional(), ''),
}))

export const Route = createFileRoute('/(store)/_store-layout')({
    component: StoreLayoutComponent,
    validateSearch: validationSchema,
})

function StoreLayoutComponent() {
    return <>
        <StoreLayout>
            <Outlet />
        </StoreLayout>
    </>
}
