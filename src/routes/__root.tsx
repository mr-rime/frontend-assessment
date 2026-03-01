import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import type { AdminAuthState } from '@/features/admin/components/auth/store/admin-auth.store'
import type { UserAuthState } from '@/features/store/store/user-auth.store'

interface RouterContext {
    adminAuth: AdminAuthState
    userAuth: UserAuthState
}

const RootLayout = () => (
    <>
        <Outlet />
        <TanStackRouterDevtools position='bottom-left' />
    </>
)

export const Route = createRootRouteWithContext<RouterContext>()({ component: RootLayout })