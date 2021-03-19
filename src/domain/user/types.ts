import * as React from "react"

type LoginProps = {
  email: string
  password: string
}
type RegisterProps = {
  email: string
  password: string
  firstName: string
  lastName: string
}
type AuthCalls = {
  login: (credentials: LoginProps) => Promise<UserInfo | null>
  register: (userInfo: RegisterProps) => Promise<void>
  logout: () => void
}

type UserInfo = {
  email: string
  firstName: string
  lastName: string
}
type UserCalls = {
  user: UserInfo
  setUser: React.Dispatch<React.SetStateAction<UserInfo>>
}

export type {AuthCalls, LoginProps, RegisterProps, UserInfo, UserCalls}
