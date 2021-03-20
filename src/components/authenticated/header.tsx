import {Navbar, Container, Nav} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import {useAuth} from "../../domain/user/auth-provider"
import profile from "../../images/profile-picture-small.jpg"

function AuthenticatedHeader() {
  const {logout} = useAuth()
  return (
    <Navbar className="mb-5 p-4" collapseOnSelect expand="md" variant="dark">
      <Container className="navcontainer">
        <img
          src={profile}
          className="profile-picture mr-2"
          alt="Profile of me"
        />
        <NavLink to="/">
          <Navbar.Brand className="brand">Tobias Zimmermann</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink exact className="nav-link" to="/blog">
              Blog
            </NavLink>
            <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AuthenticatedHeader
