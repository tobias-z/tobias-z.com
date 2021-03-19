import * as React from "react"
import {useAuth} from "../../domain/user/auth-provider"

function Login() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const {login} = useAuth()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await login({
      email,
      password,
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
