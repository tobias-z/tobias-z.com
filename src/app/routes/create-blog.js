import * as React from "react"
import {Button, Col, Container, Form, Row} from "react-bootstrap"
import MDEditor from "@uiw/react-md-editor"
import {Helmet} from "react-helmet"
import {fetchRandomData} from "../../api/utils"
import {blogURL} from "../../api/blog"

function CreateBlog() {
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [blog, setBlog] = React.useState("# Your blog")

  return (
    <Container>
      <Helmet>
        <title>Create Blog | Tobias Zimmermann</title>
        <meta property="og:title" content="Create Blog | Tobias Zimmermann" />
        <meta property="og:description" content="Create a blog" />
      </Helmet>
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
            onClick={async () => {
              // Do post with blog + title
              // Title has to be unique
              const requestBody = {
                title,
                description,
                body: blog,
              }
              fetchRandomData(blogURL.base, "POST", requestBody)
                .then(data => console.log(data))
                .catch(err => console.error(err))
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
