import { Outlet, createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(admin)/_auth-layout')({
  component: PathlessAuthLayout,
})

function PathlessAuthLayout() {
  return <Outlet />
}
