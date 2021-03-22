import * as React from "react"
import {Container} from "react-bootstrap"

function SmallContainer({children}: any) {
  return <Container className="small-container">{children}</Container>
}

export default SmallContainer
