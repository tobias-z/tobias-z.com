import * as React from "react"
import {Button, Col, Container, Row} from "react-bootstrap"
import MDEditor from "@uiw/react-md-editor"

function CreateBlog() {
  const [blog, setBlog] = React.useState("# Your blog")
  return (
    <Container>
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
              // Do post with values
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
