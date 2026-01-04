import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/membros-do-grupo')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Em breve!</div>
}
