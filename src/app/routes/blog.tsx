import * as React from "react"
import {Helmet} from "react-helmet"
import {useHistory} from "react-router-dom"
import {Button, Col, Form, Row} from "react-bootstrap"
import {useUser} from "../../domain/user/user-provider"
import BlogCard from "../../components/blog-card"
import useNoBlogs from "../../api/use-no-blogs"
import SmallContainer from "../../components/small-container"
import {NoBlogs} from "../../api/types"

function BlogFinder() {
  const history = useHistory()
  const {user} = useUser()
  const [search, setSearch] = React.useState("")
  const [blogsToShow, setBlogsToShow] = React.useState<Array<NoBlogs>>([])
  const {data, status, error} = useNoBlogs()

  React.useEffect(() => {
    if (!search || !data) return
    setBlogsToShow(
      data.all.filter(blog =>
        blog.title.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [data, search])

  function displayBlogs() {
    switch (status) {
      case "idle":
        return <div>Idle</div>
      case "loading":
        return <h3 className="text-center">Loading blogs...</h3>
      case "error":
        return <h3>Error: {error}</h3>
      case "success": {
        console.log(data)
        if (!data) return <div>No blogs found</div>
        const arrayToMap = search ? blogsToShow : data.all
        return (
          <>
            {arrayToMap.map(blog => (
              <Col md="6" key={blog.id} className="mt-4">
                <BlogCard blog={blog} />
              </Col>
            ))}
          </>
        )
      }
      default:
        return <div>Unknown state</div>
    }
  }

  return (
    <SmallContainer>
      <Row>
        <Helmet>
          <title>Blog | Tobias Zimmermann</title>
          <meta property="og:title" content="Blog | Tobias Zimmermann" />
          <meta property="og:description" content="Tobias Zimmermann's blogs" />
        </Helmet>
        <Col md="8" className="m-auto">
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
      <Row>{displayBlogs()}</Row>
    </SmallContainer>
  )
}

export default BlogFinder
