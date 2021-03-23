type HttpMethods = "GET" | "POST" | "PUT" | "DELETE"

type Options = {
  method: HttpMethods
  headers: {
    "Content-type": string
    Accept: string
  }
  body?: any
}

type ApiError = {
  status: number
  fullError: () => Promise<{
    code: string
    message: string
  }>
}

export type {HttpMethods, Options, ApiError}
