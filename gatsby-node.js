const path = require("path")

async function createPages({graphql, actions}) {
  const {data} = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (!data) {
    throw new Error("No markdown filed were found")
  }

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: path.resolve("./src/templates/$blogSlug.tsx"),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}

exports.createPages = createPages
