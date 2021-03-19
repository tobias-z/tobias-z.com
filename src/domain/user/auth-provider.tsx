import * as React from "react"
import type {AuthCalls, LoginProps, RegisterProps} from "./types"
import {userInitialState, useUser} from "./user-provider"
import users from "../../mockdb/users"

const AuthContext = React.createContext<AuthCalls | undefined>(undefined)

function AuthProvider({children}: any) {
  const {setUser} = useUser()

  const login = React.useCallback(async (credentials: LoginProps) => {
    // Do db call to login user
    const foundUsers = await users()
    const user = foundUsers.find((u: any) => u.email === credentials.email)
    if (user) return user
    return null
  }, [])

  const register = React.useCallback(async (userInfo: RegisterProps) => {
    // Do db call to register the user
  }, [])

  const logout = React.useCallback(() => {
    // Set user to null
    setUser(userInitialState)
  }, [setUser])

  const values = React.useMemo(
    () => ({
      login,
      logout,
      register,
    }),
    [login, logout, register]
  )

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

function useAuth() {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error("Auth context was used outside it's provider")
  }
  return context
}

export {useAuth, AuthProvider}
