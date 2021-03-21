type HttpMethods = "GET" | "POST" | "PUT" | "DELETE"

type Options = {
  method: HttpMethods
  headers: {
    "Content-type": string
    Accept: string
  }
  body?: any
}

export type {HttpMethods, Options}
