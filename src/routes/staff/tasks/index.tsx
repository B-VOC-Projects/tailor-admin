import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/staff/tasks/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/staff/tasks/"!</div>;
}
