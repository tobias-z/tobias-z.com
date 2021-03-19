import * as React from "react"
import {Link} from "react-router-dom"
import {useAuth} from "../../domain/user/auth-provider"

function AuthenticatedHeader() {
  const {logout} = useAuth()
  return (
    <header>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li onClick={() => logout()}>Logout</li>
      </ul>
    </header>
  )
}

export default AuthenticatedHeader
