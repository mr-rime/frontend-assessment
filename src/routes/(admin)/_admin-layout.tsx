import { AdminLayout } from '@/layouts/admin-layout'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/_admin-layout')({
    beforeLoad: ({ context }) => {
        if (!context.adminAuth.isAuthenticated) {
            throw redirect({
                to: '/admin/login',
            })
        }
    },
    component: PathlessAdminLayout,
})

function PathlessAdminLayout() {
    return <>
        <AdminLayout>
            <Outlet />
        </AdminLayout>
    </>
}
