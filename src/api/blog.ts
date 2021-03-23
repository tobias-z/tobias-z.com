const blogURL = {
  base: "https://api.tobias-z.com/tobias-z/blogs/",
  byTitle: (title: string) =>
    `https://api.tobias-z.com/tobias-z/blogs/title/${title}`,
  byId: (blogId: any) => `https://api.tobias-z.com/tobias-z/blogs/${blogId}`,
}

export {blogURL}
