import * as React from "react"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import Footer from "../components/footer"
import Home from "./routes/home"
import Header from "../components/authenticated/header"

function AuthenticatedApp() {
  return (
    <>
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </>
  )
}

function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default AuthenticatedApp
