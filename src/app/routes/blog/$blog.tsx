import * as React from "react"
import {useParams} from "react-router-dom"
import {Button, Col, Row} from "react-bootstrap"
import {Helmet} from "react-helmet"
import MDEditor from "@uiw/react-md-editor"
import SmallContainer from "../../../components/small-container"
import {useUser} from "../../../domain/user/user-provider"
import useEditBlog from "../../../api/use-edit-blog"
import useBlog from "../../../api/useBlog"

type ParamTypes = {
  title: string
}

function Blog() {
  const {title} = useParams<ParamTypes>()
  const {user} = useUser()
  const [updatedBlog, setUpdatedBlog] = React.useState<string | undefined>()
  const [isEdit, setIsEdit] = React.useState(false)
  const {data: blog, status, error} = useBlog(title)
  const {mutate, isSuccess, isLoading} = useEditBlog()

  React.useEffect(() => {
    if (blog) setUpdatedBlog(blog.body)
  }, [blog])

  function calculateDisplayButtons() {
    return (
      <div className="mb-3">
        {isEdit ? (
          <div className="d-flex">
            <Button
              className="mr-2"
              variant="secondary"
              onClick={() => setIsEdit(false)}>
              Exit edit
            </Button>
            <Button
              onClick={() => {
                if (!blog || !updatedBlog) return
                const requestBody = {
                  id: blog.id,
                  title: blog.title,
                  description: blog.description,
                  body: updatedBlog,
                  createdAt: blog.createdAt,
                  updatedAt: blog.updatedAt,
                }
                mutate(requestBody)
              }}>
              {isLoading ? "Updating blog..." : "Save changes"}
            </Button>
          </div>
        ) : (
          <h5
            className="text-primary"
            style={{cursor: "pointer"}}
            onClick={() => setIsEdit(true)}>
            Edit blog
          </h5>
        )}
      </div>
    )
  }

  function displayBlog() {
    switch (status) {
      case "idle":
        return <div>Idle</div>
      case "loading":
        return <h3 className="text-center">Loading blog...</h3>
      case "error":
        return <h3>Error: {error}</h3>
      case "success":
        if (!blog) return <div>No blog found</div>
        return (
          <div>
            {isSuccess && (
              <h3 className="text-success">Success! Blog has been edited 🎉</h3>
            )}
            {isEdit ? (
              <MDEditor
                value={updatedBlog}
                onChange={setUpdatedBlog}
                height={500}
              />
            ) : (
              <MDEditor.Markdown source={blog.body} />
            )}
            <hr />
            <div className="text-muted d-flex flex-column align-items-end">
              {user.email && calculateDisplayButtons()}
              <p>{blog.createdAt}</p>
              <p>{blog.description}</p>
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
        <Col>{displayBlog()}</Col>
      </Row>
    </SmallContainer>
  )
}

export default Blog
