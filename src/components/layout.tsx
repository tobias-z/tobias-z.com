import * as React from "react"
import {Container} from "react-bootstrap"
import Footer from "./footer"
import Header from "./unauthenticated/header"

function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  )
}

export default Layout
