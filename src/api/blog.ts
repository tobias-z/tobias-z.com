const blogURL = {
  base: "https://api.tobias-z.com/tobias-z/blogs/",
  withNoBlog: "https://api.tobias-z.com/tobias-z/blogs/noblogs",
  byTitle: (title: string) =>
    `https://api.tobias-z.com/tobias-z/blogs/title/${title}`,
  byId: (blogId: number) => `https://api.tobias-z.com/tobias-z/blogs/${blogId}`,
}

export {blogURL}
