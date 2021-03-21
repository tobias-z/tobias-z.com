import * as React from "react"
import {Button, Col, Container, Form, Row} from "react-bootstrap"
import {useHistory} from "react-router"
import {useUser} from "../../domain/user/user-provider"
import {Helmet} from "react-helmet"
import {fetchRandomData} from "../../api/utils"
import {blogURL} from "../../api/blog"
import type {BlogType} from "./types"
import BlogCard from "../../components/blog-card"

type BlogData = {
  all: Array<BlogType>
}

function BlogFinder() {
  const history = useHistory()
  const {user} = useUser()
  const [search, setSearch] = React.useState("")
  const [blogs, setBlogs] = React.useState<Array<BlogType>>([])
  const [loadingBlogs, setLoadingBlogs] = React.useState(false)

  React.useEffect(() => {
    // fetch with react query
    setLoadingBlogs(true)
    fetchRandomData(blogURL.base, "GET")
      .then((data: BlogData) => {
        setBlogs(data.all)
        setLoadingBlogs(false)
      })
      .catch(err => {
        console.error(err)
        setLoadingBlogs(false)
      })
  }, [])

  React.useEffect(() => {
    // do search stuff
  }, [search])

  function displayBlogs() {
    if (loadingBlogs) {
      return <h3 className="text-center">Loading blogs...</h3>
    } else {
      return (
        <>
          {blogs.map(blog => (
            <Col md="3" key={blog.id}>
              <BlogCard blog={blog} />
            </Col>
          ))}
        </>
      )
    }
  }

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
      <Row className="mt-3">{displayBlogs()}</Row>
    </Container>
  )
}

export default BlogFinder
