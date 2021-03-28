import {graphql} from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import SmallContainer from "../components/small-container"

type TBlogDisplay = {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
        description: string
      }
    }
  }
}

function BlogDisplay({data}: TBlogDisplay) {
  return (
    <Layout>
      <SmallContainer>
        <h2>{data.markdownRemark.frontmatter.title}</h2>
        <h3>{data.markdownRemark.frontmatter.description}</h3>
        <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
      </SmallContainer>
    </Layout>
  )
}

export const query = graphql`
  query Project($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`

export default BlogDisplay
