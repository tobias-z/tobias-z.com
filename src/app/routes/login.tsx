import * as React from "react"
import {Container, Row} from "react-bootstrap"
import {useHistory} from "react-router"
import {useAuth} from "../../domain/user/auth-provider"
import {useUser} from "../../domain/user/user-provider"

function Login() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const {login} = useAuth()
  const {setUser} = useUser()
  const history = useHistory()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const user = await login({
      email,
      password,
    })
    if (user) {
      history.push("/")
      setUser(user)
    }
    //display error message if no user
  }

  return (
    <Container>
      <Row>
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
      </Row>
    </Container>
  )
}

export default Login
