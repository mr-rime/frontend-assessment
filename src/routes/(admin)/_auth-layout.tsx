import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/_auth-layout')({
  component: PathlessAuthLayout,
})

function PathlessAuthLayout() {
  return <Outlet />
}
