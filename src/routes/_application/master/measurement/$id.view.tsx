import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_application/master/measurement/$id/view',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_application/master/measurement/$id/view"!</div>
}
