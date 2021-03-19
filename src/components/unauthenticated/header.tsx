import * as React from "react"
import {Link} from "react-router-dom"

function UnAuthenticatedHeader() {
  return (
    <header>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </header>
  )
}

export default UnAuthenticatedHeader
