import { createLazyFileRoute } from '@tanstack/react-router'

const About = () => {
  return <div>About</div>
}

export const Route = createLazyFileRoute('/contact')({
  component: About
})

export default About
