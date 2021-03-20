import * as React from "react"
import {Button} from "react-bootstrap"
import {useHistory} from "react-router"
import {useAuth} from "../../domain/user/auth-provider"
import {useUser} from "../../domain/user/user-provider"
import {Formik, Form} from "formik"
import MyInput from "../../components/form/my-input"
import CenteredContainer from "../../components/centered-container"
import OutlinedContainer from "../../components/outlined-container"
import * as yup from "yup"
import {Link} from "react-router-dom"

function Login() {
  const {login} = useAuth()
  const {setUser} = useUser()
  const history = useHistory()
  const [errorMessage, setErrorMessage] = React.useState("")

  const validationSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(10),
  })

  return (
    <CenteredContainer>
      <Formik
        initialValues={{email: "", password: ""}}
        validationSchema={validationSchema}
        onSubmit={async (values, helpers) => {
          const {setSubmitting} = helpers
          setSubmitting(true)
          const user = await login(values)
          if (user) {
            history.push("/")
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
                Submit
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
