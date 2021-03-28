import * as React from "react"
import {Navbar, Nav, Container} from "react-bootstrap"
import {graphql, Link, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import type * as TZimmer from "../../types/index"

function UnAuthenticatedHeader() {
  const {file}: TZimmer.ImageFixed = useStaticQuery(graphql`
    query ProfilePicture {
      file(relativePath: {eq: "profile-picture-small.jpg"}) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Navbar className="mb-5 p-4" collapseOnSelect expand="md" variant="dark">
      <Container className="navcontainer">
        <Img
          fixed={file.childImageSharp.fixed}
          className="profile-picture mr-2"
          alt="Profile of me"
        />
        <Link to="/">
          <Navbar.Brand className="brand">Tobias Zimmermann</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default UnAuthenticatedHeader
