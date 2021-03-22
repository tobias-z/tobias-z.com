import {Container, Row} from "react-bootstrap"
import {Helmet} from "react-helmet"
import SmallContainer from "../../components/small-container"

function UnknownRoute() {
  return (
    <SmallContainer>
      <Helmet>
        <title>404 | Tobias Zimmermann</title>
        <meta property="og:title" content="404 | Tobias Zimmermann" />
        <meta property="og:description" content="Page was not found" />
      </Helmet>
      <Row
        className="d-flex justify-content-center align-items-center"
        style={{minHeight: "80vh"}}>
        <h1 style={{fontSize: "60px"}}>
          <strong>404</strong>: Unknown page
        </h1>
      </Row>
    </SmallContainer>
  )
}

export default UnknownRoute
