import * as React from "react"
import {AuthProvider} from "./domain/user/auth-provider"
import {UserProvider} from "./domain/user/user-provider"

function AppProvider({children}: {children: React.ReactNode}) {
  return (
    <UserProvider>
      <AuthProvider>{children}</AuthProvider>
    </UserProvider>
  )
}

export default AppProvider
