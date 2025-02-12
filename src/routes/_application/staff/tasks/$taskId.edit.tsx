import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_application/staff/tasks/$taskId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/staff/tasks/$taskId/edit"!</div>
}
