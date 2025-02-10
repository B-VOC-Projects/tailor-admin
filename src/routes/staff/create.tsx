import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/staff/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/staff/create"!</div>
}
