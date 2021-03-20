import {Container} from "react-bootstrap"

function CenteredContainer({children}: any) {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{minHeight: "100vh"}}>
      {children}
    </Container>
  )
}

export default CenteredContainer
