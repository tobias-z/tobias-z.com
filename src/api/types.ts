type HttpMethods = "DELETE" | "GET" | "POST" | "PUT"

type Options = {
  method: HttpMethods
  headers: {
    "Content-type": string
    Accept: string
  }
  body?: RequestInit
}

type StatusError = {
  code: number
  message: string
}

type ErrorResponse = {
  status: number
  fullError: Promise<StatusError>
}

type NoBlogs = {
  id: number
  title: string
  description: string
}

type NoBlog = {
  all: Array<NoBlogs>
}

export type {HttpMethods, Options, ErrorResponse, NoBlog, NoBlogs}
