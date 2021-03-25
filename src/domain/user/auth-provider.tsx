import * as React from "react"
import mockDBAuthorize from "../../mockdb/users"
import type {AuthCalls, LoginProps, RegisterProps} from "./types"
import {userInitialState, useUser} from "./user-provider"
import {UserInfo} from "./types"

const AuthContext = React.createContext<AuthCalls | undefined>(undefined)

function AuthProvider({children}: {children: React.ReactNode}) {
  const {setUser} = useUser()

  const login = React.useCallback(async (credentials: LoginProps) => {
    // Do db call to login user
    try {
      const foundUsers = await mockDBAuthorize(credentials)
      const user = foundUsers.find(
        (u: UserInfo) => u.email === credentials.email
      )
      return user
    } catch (error: unknown) {
      return null
    }
  }, [])

  const register = React.useCallback(async (userInfo: RegisterProps) => {
    // Do db call to register the user
    console.log(userInfo)
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
