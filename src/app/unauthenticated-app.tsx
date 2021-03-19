import * as React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "../components/unauthenticated/header"
import Home from "./routes/home"
import Login from "./routes/login"
import Footer from "../components/footer"
import {Container} from "react-bootstrap"
import UnknownRoute from "./routes/404"

function UnauthenticatedApp() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Container>
            <AppRoutes />
          </Container>
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
      <Route path="/login" component={Login} />
      <Route path="/" component={UnknownRoute} />
    </Switch>
  )
}

export default UnauthenticatedApp
