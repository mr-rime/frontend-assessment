import { StoreLayout } from '@/layouts/store-layout'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { zodValidator } from '@tanstack/zod-adapter'
import * as z from "zod"

const validationSchema = zodValidator(z.object({
    page: z.number().int().positive().optional(),
    sortBy: z.string().optional(),
    order: z.enum(['asc', 'desc']).optional(),
    category: z.array(z.string()).optional(),
    q: z.string().optional(),
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
