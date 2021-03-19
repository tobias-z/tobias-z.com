import * as React from "react"
import {Container, Row} from "react-bootstrap"

function UnknownRoute() {
  return (
    <Container>
      <Row
        className="d-flex justify-content-center align-items-center"
        style={{minHeight: "80vh"}}>
        <h1 style={{fontSize: "60px"}}>404: Unknown page</h1>
      </Row>
    </Container>
  )
}

export default UnknownRoute
