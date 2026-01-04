import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bolsa-de-componentes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Em breve!</div>
}
