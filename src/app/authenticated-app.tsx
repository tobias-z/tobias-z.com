import * as React from "react"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import Footer from "../components/footer"
import Home from "./routes/home"
import UnknownRoute from "./routes/404"
import Header from "../components/authenticated/header"

function AuthenticatedApp() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </Router>
    </>
  )
}

function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/" component={UnknownRoute} />
    </Switch>
  )
}

export default AuthenticatedApp
