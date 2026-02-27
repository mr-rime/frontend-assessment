import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/_admin-layout/admin/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/"!</div>
}
