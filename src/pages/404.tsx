import * as React from "react"
import {Row} from "react-bootstrap"
import {Helmet} from "react-helmet"
import SmallContainer from "../components/small-container"
import Layout from "../components/layout"

function UnknownPage() {
  return (
    <Layout>
      <SmallContainer>
        <Helmet>
          <title>404 | Tobias Zimmermann</title>
          <meta property="title" content="404 | Tobias Zimmermann" />
          <meta property="description" content="Page was not found" />
        </Helmet>
        <Row
          className="d-flex justify-content-center align-items-center"
          style={{minHeight: "80vh"}}>
          <h1 style={{fontSize: "60px"}}>
            <strong>404</strong>: Unknown page
          </h1>
        </Row>
      </SmallContainer>
    </Layout>
  )
}

export default UnknownPage
