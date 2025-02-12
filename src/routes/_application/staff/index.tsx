import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_application/staff/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/staff/"!</div>
}
