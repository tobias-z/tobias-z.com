import * as React from "react"
import {Button, Card} from "react-bootstrap"
import {useHistory} from "react-router"
import type {BlogType} from "../app/routes/types"
import {CopyToClipboard} from "react-copy-to-clipboard"

type Props = {
  blog: BlogType
}

const BlogCard = React.memo(({blog}: Props) => {
  const history = useHistory()
  const [copied, setCopied] = React.useState(false)

  function handleGoToBlog() {
    history.push(`blog/${blog.title}`)
  }

  return (
    <Card className="text-center" style={{cursor: "pointer"}}>
      <Card.Body onClick={handleGoToBlog}>
        <Card.Title>{blog.title}</Card.Title>
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
    </Card>
  )
})

export default BlogCard
