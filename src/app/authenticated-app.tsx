import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import Footer from "../components/footer"
import Home from "./routes/home"
import UnknownRoute from "./routes/404"
import Header from "../components/authenticated/header"
import Layout from "./layout"

function AuthenticatedApp() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Layout element={<Home />} />
          <Footer />
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
