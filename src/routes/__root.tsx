import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Footer from '~/components/footer'
import Header from '~/components/header'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <div className='container mx-auto py-6 min-h-screen'>
        <Outlet />
        <TanStackRouterDevtools />
      </div>

      <Footer />
    </>
  )
})
