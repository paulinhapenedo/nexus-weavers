import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/algibeira')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Em breve!</div>
}
