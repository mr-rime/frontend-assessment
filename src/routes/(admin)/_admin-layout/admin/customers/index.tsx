import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(admin)/_admin-layout/admin/customers/')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <div>Hello "/(admin)/_admin-layout/admin/customers/"!</div>
}
