import * as React from "react"
import {Button, Card} from "react-bootstrap"
import {useHistory} from "react-router"
import type {BlogType} from "../app/routes/types"
import {CopyToClipboard} from "react-copy-to-clipboard"
import {useUser} from "../domain/user/user-provider"
import useDeleteBlog from "../api/useDeleteBlog"

type Props = {
  blog: BlogType
}

const BlogCard = React.memo(({blog}: Props) => {
  const history = useHistory()
  const {user} = useUser()
  const [copied, setCopied] = React.useState(false)
  const {mutate, isLoading} = useDeleteBlog()

  function handleGoToBlog() {
    history.push(`blog/${blog.title}`)
  }

  function handleDelete() {
    mutate(blog.id)
  }

  return (
    <Card className="text-center" style={{cursor: "pointer"}}>
      <Card.Body onClick={handleGoToBlog}>
        <Card.Title>
          <div>{blog.title}</div>
        </Card.Title>
        <Card.Text>{blog.description}</Card.Text>
      </Card.Body>
      <CopyToClipboard
        text={`https://tobias-z.com/blog/${blog.title}`}
        onCopy={() => {
          setCopied(true)
          setTimeout(() => setCopied(false), 3000)
        }}>
        <Button variant="success">{copied ? "Copied" : "Copy link"}</Button>
      </CopyToClipboard>
      {user.email && (
        <Button onClick={handleDelete} variant="danger">
          {isLoading ? "Deleting..." : "Delete"}
        </Button>
      )}
    </Card>
  )
})

export default BlogCard
