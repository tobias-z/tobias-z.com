import * as React from "react"
import "../scss/compiled/index.min.css"
import "../scss/compiled/layout.min.css"
import {Row, Button} from "react-bootstrap"
import {Helmet} from "react-helmet"
import SmallContainer from "../components/small-container"
import Layout from "../components/layout"

function IndexPage() {
  return (
    <Layout>
      <SmallContainer>
        <Helmet>
          <title>404 | Tobias Zimmermann</title>
          <meta property="title" content="404 | Tobias Zimmermann" />
          <meta property="description" content="Page was not found" />
        </Helmet>
        <Row>
          <Button block>Hello</Button>Welcome to my page 🙂
        </Row>
      </SmallContainer>
    </Layout>
  )
}

export default IndexPage
