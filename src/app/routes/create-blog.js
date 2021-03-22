import * as React from "react"
import {Button, Col, Container, Form, Row} from "react-bootstrap"
import MDEditor from "@uiw/react-md-editor"
import {Helmet} from "react-helmet"
import useCreateBlog from "../../api/useCreateBlog"

function CreateBlog() {
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [blog, setBlog] = React.useState("# Your blog")
  const [errorMessage, setErrorMessage] = React.useState("")
  const {mutate, error, isLoading} = useCreateBlog()
  console.log(error)

  React.useEffect(() => {
    if (!error) return
    error.fullError.then(err => {
      setErrorMessage(`${err.code}: ${err.message}`)
    })
  }, [error])

  return (
    <Container>
      <Helmet>
        <title>Create Blog | Tobias Zimmermann</title>
        <meta property="og:title" content="Create Blog | Tobias Zimmermann" />
        <meta property="og:description" content="Create a blog" />
      </Helmet>
      <Row>
        <Col>
          {errorMessage && <h3 className="text-danger">{errorMessage}</h3>}
          <Form.Group controlId="blog-title">
            <Form.Control
              name="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
            />
          </Form.Group>
          <Form.Group controlId="blog-description">
            <Form.Control
              name="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <MDEditor value={blog} onChange={setBlog} height="500" />
        </Col>
      </Row>
      <Row className="my-4">
        <Col className="d-flex justify-content-end">
          <Button
            className="w-25 p-2"
            onClick={async () => {
              // Do post with blog + title
              // Title has to be unique
              const requestBody = {
                title,
                description,
                body: blog,
              }
              mutate(requestBody)
            }}>
            {isLoading ? "Creating your blog..." : "Create Blog"}
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default CreateBlog
