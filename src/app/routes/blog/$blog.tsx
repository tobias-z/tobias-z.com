import {useParams} from "react-router-dom"
import {Col, Row} from "react-bootstrap"
import {Helmet} from "react-helmet"
import useBlog from "../../../api/useBlog"
import MDEditor from "@uiw/react-md-editor"
import SmallContainer from "../../../components/small-container"

type ParamTypes = {
  title: string
}

function Blog() {
  const {title} = useParams<ParamTypes>()
  const {data, status, error} = useBlog(title)

  function displayBlog() {
    switch (status) {
      case "idle":
        return <div>Idle</div>
      case "loading":
        return <h3 className="text-center">Loading blog...</h3>
      case "error":
        return <h3>Error: {error}</h3>
      case "success":
        if (!data) return <div>No blog found</div>
        return (
          <div>
            <MDEditor.Markdown source={data.body} />
            <hr />
            <div className="text-muted d-flex flex-column align-items-end">
              <p>{data.createdAt}</p>
              <p>{data.description}</p>
            </div>
          </div>
        )
      default:
        return <div>Unknown state</div>
    }
  }

  return (
    <SmallContainer>
      <Helmet>
        <title>{data ? data.title : "Blog | Tobias Zimmermann"}</title>
        <meta
          property="og:title"
          content={data ? data.title : "Blog | Tobias Zimmermann"}
        />
        <meta
          property="og:description"
          content={data ? data.description : "Custom blog created for stuff"}
        />
      </Helmet>
      <Row>
        <Col>{displayBlog()}</Col>
      </Row>
    </SmallContainer>
  )
}

export default Blog
