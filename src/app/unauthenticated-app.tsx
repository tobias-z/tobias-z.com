import * as React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "../components/unauthenticated/header"
import Home from "./routes/home"
import Login from "./routes/login"
import Footer from "../components/footer"

function UnauthenticatedApp() {
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
      <Route path="/login" component={Login} />
    </Switch>
  )
}

export default UnauthenticatedApp
