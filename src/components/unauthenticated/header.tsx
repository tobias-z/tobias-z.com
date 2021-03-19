import {Navbar, Nav, Container} from "react-bootstrap"
import {NavLink} from "react-router-dom"

function UnAuthenticatedHeader() {
  return (
    <Navbar className="mb-4 " collapseOnSelect expand="md" variant="dark">
      <Container className="navcontainer">
        <NavLink to="/">
          <Navbar.Brand className="brand">Tobias Zimmermann</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" exact to="/login">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default UnAuthenticatedHeader
