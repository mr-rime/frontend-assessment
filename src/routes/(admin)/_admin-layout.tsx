import { AdminLayout } from '@/layouts/admin-layout'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/_admin-layout')({
    component: PathlessAdminLayout,
})

function PathlessAdminLayout() {
    return <>
        <AdminLayout>
            <Outlet />
        </AdminLayout>
    </>
}
