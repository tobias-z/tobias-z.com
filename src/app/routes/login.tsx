import * as React from "react"
import {Formik, Form} from "formik"
import {Link, useHistory} from "react-router-dom"
import {Button, Spinner} from "react-bootstrap"
import * as yup from "yup"
import {Helmet} from "react-helmet"
import {useAuth} from "../../domain/user/auth-provider"
import {useUser} from "../../domain/user/user-provider"
import MyInput from "../../components/form/my-input"
import CenteredContainer from "../../components/centered-container"
import OutlinedContainer from "../../components/outlined-container"

function Login() {
  const {login} = useAuth()
  const {setUser} = useUser()
  const history = useHistory()
  const [errorMessage, setErrorMessage] = React.useState("")

  const validationSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(10),
  })

  React.useEffect(() => {
    return () => history.push("/")
  }, [history])

  return (
    <CenteredContainer>
      <Helmet>
        <title>Login | Tobias Zimmermann</title>
        <meta property="og:title" content="Login | Tobias Zimmermann" />
        <meta property="og:description" content="Login page of tobias-z.com" />
      </Helmet>
      <Formik
        initialValues={{email: "", password: ""}}
        validationSchema={validationSchema}
        onSubmit={async (values, helpers) => {
          const {setSubmitting} = helpers
          setSubmitting(true)
          const user = await login(values)
          if (user) {
            setUser(user)
          } else {
            setErrorMessage("Incorrect login... Please try again")
          }
          setSubmitting(false)
          //display error message if no user
        }}>
        {({isSubmitting}) => (
          <Form>
            <OutlinedContainer>
              {errorMessage && (
                <div className="text-danger">{errorMessage}</div>
              )}
              <MyInput
                name="email"
                type="email"
                placeholder="xxxx@mail.com"
                label="Email"
                text="Your email will never be shared with anyone"
                autoFocus
              />
              <MyInput
                name="password"
                type="password"
                label="Password"
                placeholder="·············"
              />
              <Button block disabled={isSubmitting} type="submit">
                {isSubmitting ? (
                  <>
                    <Spinner animation="border" /> Loading...
                  </>
                ) : (
                  "Login"
                )}
              </Button>
              <Link to="/">
                <p className="pt-2 text-secondary">↩ back to home</p>
              </Link>
            </OutlinedContainer>
          </Form>
        )}
      </Formik>
    </CenteredContainer>
  )
}

export default Login
