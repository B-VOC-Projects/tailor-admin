import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_application/master/measurement/$id/edit',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>Hello "/_application/master/measurement/$measurementId/edit"!</div>
  )
}
