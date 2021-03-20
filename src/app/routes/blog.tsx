import * as React from "react"
import {Button, Col, Container, Form, Row} from "react-bootstrap"
import {useHistory} from "react-router"
import {useUser} from "../../domain/user/user-provider"
import {Helmet} from "react-helmet"

function Blog() {
  const history = useHistory()
  const {user} = useUser()
  const [search, setSearch] = React.useState("")

  React.useEffect(() => {
    // fetch with react query
  }, [])

  React.useEffect(() => {
    // do search stuff
  }, [search])

  return (
    <Container>
      <Helmet>
        <title>Blog | Tobias Zimmermann</title>
        <meta property="og:title" content="Blog | Tobias Zimmermann" />
        <meta property="og:description" content="Tobias Zimmermann's blogs" />
      </Helmet>
      <Row>
        <Col md="6" className="m-auto">
          <Form.Group controlId="search-blogs">
            <Form.Control
              type="search"
              name="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search Blogs"
              size="lg"
            />
          </Form.Group>
          {user.email && (
            <div className="d-flex justify-content-center">
              <Button onClick={() => history.push("/create-blog")}>
                Create new blog
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Blog
