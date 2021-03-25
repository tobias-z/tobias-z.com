import * as React from "react"
import {Container} from "react-bootstrap"

function SmallContainer({children}: {children: React.ReactNode}) {
  return <Container className="small-container">{children}</Container>
}

export default SmallContainer
