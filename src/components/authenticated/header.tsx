import {Navbar, Container, Nav} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import {useAuth} from "../../domain/user/auth-provider"

function AuthenticatedHeader() {
  const {logout} = useAuth()
  return (
    <Navbar className="mb-4 " collapseOnSelect expand="md" variant="dark">
      <Container className="navcontainer">
        <NavLink to="/">
          <Navbar.Brand className="brand">Tobias Zimmermann</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact className="nav-link" to="/">
              Home
            </NavLink>
            <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AuthenticatedHeader
