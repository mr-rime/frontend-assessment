import { StoreLayout } from '@/layouts/store-layout'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(store)/_store-layout')({
    component: PathlessStoreLayout,
})

function PathlessStoreLayout() {
    return <>
        <StoreLayout>
            <Outlet />
        </StoreLayout>
    </>
}
