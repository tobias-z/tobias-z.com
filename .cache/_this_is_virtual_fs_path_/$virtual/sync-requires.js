
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/tobiaszimmermann/Documents/Projects/com.tobias-z/client/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/tobiaszimmermann/Documents/Projects/com.tobias-z/client/src/pages/404.tsx")),
  "component---src-pages-blog-index-tsx": preferDefault(require("/Users/tobiaszimmermann/Documents/Projects/com.tobias-z/client/src/pages/blog/index.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/tobiaszimmermann/Documents/Projects/com.tobias-z/client/src/pages/index.tsx")),
  "component---src-templates-blog-slug-tsx": preferDefault(require("/Users/tobiaszimmermann/Documents/Projects/com.tobias-z/client/src/templates/$blogSlug.tsx"))
}

