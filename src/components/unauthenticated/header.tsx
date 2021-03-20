import {Navbar, Nav, Container} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import profile from "../../images/profile-picture-small.jpg"

function UnAuthenticatedHeader() {
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
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/blog">
              Blog
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
