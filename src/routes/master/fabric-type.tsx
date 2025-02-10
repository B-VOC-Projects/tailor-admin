import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/master/fabric-type')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/master/fabric-type"!</div>
}
