import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_application/staff/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/staff/create"!</div>
}
