/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ShopImport } from './routes/shop'
import { Route as ProductIdImport } from './routes/product/$id'

// Create Virtual Routes

const ContactLazyImport = createFileRoute('/contact')()
const CartLazyImport = createFileRoute('/cart')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const ContactLazyRoute = ContactLazyImport.update({
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/contact.lazy').then((d) => d.Route))

const CartLazyRoute = CartLazyImport.update({
  path: '/cart',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/cart.lazy').then((d) => d.Route))

const ShopRoute = ShopImport.update({
  path: '/shop',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ProductIdRoute = ProductIdImport.update({
  path: '/product/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/shop': {
      preLoaderRoute: typeof ShopImport
      parentRoute: typeof rootRoute
    }
    '/cart': {
      preLoaderRoute: typeof CartLazyImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      preLoaderRoute: typeof ContactLazyImport
      parentRoute: typeof rootRoute
    }
    '/product/$id': {
      preLoaderRoute: typeof ProductIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  ShopRoute,
  CartLazyRoute,
  ContactLazyRoute,
  ProductIdRoute,
])

/* prettier-ignore-end */
