import * as React from "react"
import type {BlogType} from "../types"
import {fetchRandomData} from "../../../api/utils"
import {blogURL} from "../../../api/blog"
import {useParams} from "react-router-dom"
import {Col, Container, Row} from "react-bootstrap"
import {Helmet} from "react-helmet"
import MDEditor from "@uiw/react-md-editor"

type ParamTypes = {
  title: string
}

function Blog() {
  const [blog, setBlog] = React.useState<BlogType>()
  const {title} = useParams<ParamTypes>()

  React.useEffect(() => {
    fetchRandomData(blogURL.byTitle(title), "GET")
      .then((data: BlogType) => setBlog(data))
      .catch(err => console.error(err))
  }, [title])

  function displayBlog() {
    if (!blog) {
      return <div>Loading blog...</div>
    } else {
      return (
        <div>
          <MDEditor.Markdown source={blog.body} />
        </div>
      )
    }
  }

  return (
    <Container>
      <Helmet>
        <title>{blog ? blog.title : "Blog | Tobias Zimmermann"}</title>
        <meta
          property="og:title"
          content={blog ? blog.title : "Blog | Tobias Zimmermann"}
        />
        <meta
          property="og:description"
          content={blog ? blog.description : "Custom blog created for stuff"}
        />
      </Helmet>
      <Row>
        <Col md="8" className="m-auto">
          {displayBlog()}
        </Col>
      </Row>
    </Container>
  )
}

export default Blog
