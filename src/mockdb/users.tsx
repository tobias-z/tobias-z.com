import type {LoginProps, UserInfo} from "../domain/user/types"

async function mockDBAuthorize(
  credentials: LoginProps
): Promise<Array<UserInfo>> {
  console.log(process.env)
  if (
    credentials.email === process.env.REACT_APP_DB_USER &&
    credentials.password === process.env.REACT_APP_DB_PW
  ) {
    return Promise.resolve([
      {
        email: process.env.REACT_APP_DB_USER,
        firstName: "Tobias",
        lastName: "Zimmermann",
      },
    ])
  } else {
    return Promise.reject("Unknown credentials")
  }
}
export default mockDBAuthorize
