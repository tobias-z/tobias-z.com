type BlogDetails = {
  title: string
  description: string
  slug: string
}

type BlogNodes = {
  frontmatter: BlogDetails
  id: string
}

type BlogPosts = {
  blog: {
    nodes: Array<BlogNodes>
  }
}

export type {BlogPosts, BlogDetails, BlogNodes}
