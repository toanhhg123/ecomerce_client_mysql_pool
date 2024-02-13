import { NextUIProvider } from '@nextui-org/react'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className='dark text-foreground bg-background'>
        <RouterProvider router={router} />
      </main>
    </NextUIProvider>
  </React.StrictMode>
)
