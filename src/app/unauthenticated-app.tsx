import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "../components/unauthenticated/header"
import Home from "./routes/home"
import Login from "./routes/login"
import Footer from "../components/footer"
import UnknownRoute from "./routes/404"
import Layout from "./layout"

function UnauthenticatedApp() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Layout element={<Home />} />
          <Footer />
        </Route>
        <Route path="/login">
          <Layout element={<Login />} />
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

export default UnauthenticatedApp
