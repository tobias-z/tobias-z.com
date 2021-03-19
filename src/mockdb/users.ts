import type {UserInfo} from "../domain/user/types"

async function users(): Promise<Array<UserInfo>> {
  return [
    {
      email: "tobias.zimmer@hotmail.com",
      firstName: "Tobias",
      lastName: "Zimmermann",
    },
  ]
}
export default users
