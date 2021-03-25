type BlogType = {
  id: number
  title: string
  description: string
  body: string
  createdAt: string
  updatedAt: string
}

type Blogs = {
  all: Array<BlogType>
}

export type {BlogType, Blogs}
