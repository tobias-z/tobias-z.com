type HttpMethods = "GET" | "POST" | "PUT" | "DELETE"

type Options = {
  method: HttpMethods
  headers: {
    "Content-type": string
    Accept: string
  }
  body?: any
}

type StatusError = {
  code: number
  message: string
}

type ErrorResponse = {
  status: number
  fullError: Promise<StatusError>
}

type NoBlog = {
  id: number
  title: string
  description: string
}

export type {HttpMethods, Options, ErrorResponse, NoBlog}
