import { createFileRoute } from '@tanstack/react-router'

const Page = () => {
  const { id } = Route.useParams()

  return <div>{id}</div>
}

export const Route = createFileRoute('/product/$id')({
  component: Page
})

export default Page
