import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import Footer from "../components/footer"
import Home from "./routes/home"
import UnknownRoute from "./routes/404"
import BlogFinder from "./routes/blog"
import CreateBlog from "./routes/create-blog"
import Header from "../components/authenticated/header"
import Layout from "./layout"
import Blog from "./routes/blog/$blog"

function AuthenticatedApp() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Layout element={<Home />} />
          <Footer />
        </Route>
        <Route exact path="/blog">
          <Header />
          <Layout element={<BlogFinder />} />
          <Footer />
        </Route>
        <Route path="/create-blog">
          <Header />
          <Layout element={<CreateBlog />} />
          <Footer />
        </Route>
        <Route path="/blog/:title">
          <Header />
          <Layout element={<Blog />} />
        </Route>
        <Route path="/">
          <Header />
          <Layout element={<UnknownRoute />} />
          <Footer />
        </Route>
      </Switch>
    </Router>
  )
}

export default AuthenticatedApp
