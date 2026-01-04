import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bag-of-holding')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Em breve!</div>
}
