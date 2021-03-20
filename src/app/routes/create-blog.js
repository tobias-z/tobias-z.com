import * as React from "react"
import {Button, Col, Container, Form, Row} from "react-bootstrap"
import MDEditor from "@uiw/react-md-editor"

function CreateBlog() {
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [blog, setBlog] = React.useState("# Your blog")

  return (
    <Container>
      <Row>
        <Col>
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
          <MDEditor value={blog} onChange={setBlog} />
        </Col>
      </Row>
      <Row className="my-4">
        <Col className="d-flex justify-content-end">
          <Button
            className="w-25 p-2"
            onClick={() => {
              // Do post with blog + title
              // Title has to be unique
              const requestBody = {
                title,
                description,
                blog,
              }
              console.log(requestBody)
            }}>
            Create Blog
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <MDEditor.Markdown source={blog} />
        </Col>
      </Row>
    </Container>
  )
}

export default CreateBlog
