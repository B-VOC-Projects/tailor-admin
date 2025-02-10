import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/staff/roles/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/staff/roles/"!</div>
}
