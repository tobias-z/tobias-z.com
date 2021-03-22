import * as React from "react"
import {Button, Row} from "react-bootstrap"
import {Helmet} from "react-helmet"
import SmallContainer from "../../components/small-container"

function Home() {
  return (
    <SmallContainer>
      <Helmet>
        <title>Home | Tobias Zimmermann</title>
        <meta property="og:title" content="Home | Tobias Zimmermann" />
        <meta property="og:description" content="Home page of tobias-z.com" />
      </Helmet>
      <Row>
        <Button block>Hello</Button>Welcome to my page 🙂
      </Row>
    </SmallContainer>
  )
}

export default Home
