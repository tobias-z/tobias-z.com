import ReactDOM from "react-dom"
import * as React from "react"
import "./scss/compiled/index.min.css"
import "./scss/compiled/layout.min.css"
import AppProvider from "./app-provider"
import {useUser} from "./domain/user/user-provider"
import {QueryClient, QueryClientProvider} from "react-query"

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
)

function App() {
  const {user} = useUser()

  const AuthenticatedApp = React.lazy(() => import("./app/authenticated-app"))
  const UnauthenticatedApp = React.lazy(
    () => import("./app/unauthenticated-app")
  )

  const queryClient = new QueryClient()

  return (
    <React.Suspense fallback={<div>full page spinner</div>}>
      <QueryClientProvider client={queryClient}>
        {user.email ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </QueryClientProvider>
    </React.Suspense>
  )
}
