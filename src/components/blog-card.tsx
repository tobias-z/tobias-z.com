import * as React from "react"
import {Link} from "gatsby"
import {Button, Card} from "react-bootstrap"
import {CopyToClipboard} from "react-copy-to-clipboard"
import type * as TZimmer from "../types/index"

type BlogCardProps = {
  frontmatter: TZimmer.BlogDetails
}

const BlogCard = React.memo(({frontmatter}: BlogCardProps) => {
  const [copied, setCopied] = React.useState(false)

  return (
    <Card className="text-center" style={{cursor: "pointer"}}>
      <Card.Body>
        <Link
          to={`/blog/${frontmatter.slug}`}
          className="text-secondary"
          style={{textDecoration: "none"}}>
          <Card.Title>
            <div>{frontmatter.title}</div>
          </Card.Title>
          <Card.Text>{frontmatter.description}</Card.Text>
        </Link>
      </Card.Body>
      <CopyToClipboard
        text={`https://tobias-z.com/blog/${frontmatter.slug}`}
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
