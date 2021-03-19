import * as React from "react"
import type {UserInfo, UserCalls} from "./types"

const UserContext = React.createContext<UserCalls | null>(null)

const userInitialState = {
  email: "",
  firstName: "",
  lastName: "",
}

function UserProvider({children}: any) {
  const [user, setUser] = React.useState<UserInfo>(userInitialState)
  const values = React.useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  )

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

function useUser() {
  const context = React.useContext(UserContext)
  if (!context) {
    throw new Error("User context was used outside it's provider")
  }
  return context
}

export {useUser, UserProvider, userInitialState}
