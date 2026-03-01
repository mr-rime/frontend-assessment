import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import "./index.css"
import { ThemeProvider } from './providers/theme-provider'
import { TooltipProvider } from './shared/components/ui/tooltip'
import { GoeyToaster } from './shared/components/ui/goey-toaster'
import { useAdminAuthStore } from './features/admin/components/auth/store/admin-auth.store'
import { useUserAuthStore } from './features/store/store/user-auth.store'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './shared/components/error-fallback/error-fallback'

const router = createRouter({
  routeTree,
  context: {
    adminAuth: undefined!,
    userAuth: undefined!,
  },
})
const queryClient = new QueryClient()


declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  const adminAuth = useAdminAuthStore()
  const userAuth = useUserAuthStore()

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RouterProvider router={router} context={{ adminAuth, userAuth }} />
    </ErrorBoundary>
  )
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="market-ui-theme">
        <TooltipProvider>
          <QueryClientProvider client={queryClient}>
            <App />
            <GoeyToaster position='top-center' duration={1000} />
          </QueryClientProvider>
        </TooltipProvider>
      </ThemeProvider>
    </StrictMode>,
  )
}