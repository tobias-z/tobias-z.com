import ReactDOM from "react-dom"
import * as React from "react"
import AppProvider from "./app-provider"
import {useUser} from "./domain/user/user-provider"

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

  return (
    <React.Suspense fallback={<div>full page spinner</div>}>
      {user.email ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  )
}
