import * as React from "react"
import {Helmet} from "react-helmet"
import {Col, Form, Row} from "react-bootstrap"
import {graphql} from "gatsby"
import BlogCard from "../../components/blog-card"
import SmallContainer from "../../components/small-container"
import type * as TZimmer from "../../types/index"
import Layout from "../../components/layout"

type BlogFinderProps = {
  data: TZimmer.BlogPosts
}

function BlogFinder({data}: BlogFinderProps) {
  const [search, setSearch] = React.useState("")
  const [blogsToShow, setBlogsToShow] = React.useState<
    Array<TZimmer.BlogNodes>
  >(data.blog.nodes)

  React.useEffect(() => {
    if (!search) {
      setBlogsToShow(data.blog.nodes)
      return
    }
    setBlogsToShow(
      data.blog.nodes.filter(blog =>
        blog.frontmatter.title.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [data, search])

  return (
    <Layout>
      <SmallContainer>
        <Row>
          <Helmet>
            <title>Blog | Tobias Zimmermann</title>
            <meta property="title" content="Blog | Tobias Zimmermann" />
            <meta property="description" content="Tobias Zimmermann's blogs" />
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
          </Col>
        </Row>
        <Row>
          {blogsToShow.map(blog => (
            <Col md="6" key={blog.id} className="mt-4">
              <BlogCard frontmatter={blog.frontmatter} />
            </Col>
          ))}
        </Row>
      </SmallContainer>
    </Layout>
  )
}

export const query = graphql`
  query BlogPosts {
    blog: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          description
          slug
        }
        id
      }
    }
  }
`

export default BlogFinder
