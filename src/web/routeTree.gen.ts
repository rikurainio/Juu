/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const ExampleLazyImport = createFileRoute('/example')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const ExampleLazyRoute = ExampleLazyImport.update({
  path: '/example',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/example.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/example': {
      id: '/example'
      path: '/example'
      fullPath: '/example'
      preLoaderRoute: typeof ExampleLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  ExampleLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/example"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/example": {
      "filePath": "example.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
