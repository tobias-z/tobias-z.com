import * as React from "react"
import {Button, Container, Row} from "react-bootstrap"
import {Helmet} from "react-helmet"

function Home() {
  return (
    <Container>
      <Helmet>
        <title>Home | Tobias Zimmermann</title>
        <meta property="og:title" content="Home | Tobias Zimmermann" />
        <meta property="og:description" content="Home page of tobias-z.com" />
      </Helmet>
      <Row>
        <Button block>Hello</Button>Welcome to my page 🙂
      </Row>
    </Container>
  )
}

export default Home
