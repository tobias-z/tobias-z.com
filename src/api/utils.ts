import type {HttpMethods, Options} from "./types"

function makeOptions(method: HttpMethods, body: any) {
  let opts: Options = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  }
  if (body) {
    opts.body = JSON.stringify(body)
  }
  return opts
}

function handleHttpErrors(res: Response) {
  if (!res.ok) {
    return Promise.reject({status: res.status, fullError: res.json()})
  }
  return res.json()
}

async function fetchRandomData(url: string, method: HttpMethods, body?: any) {
  const res = await fetch(url, method && makeOptions(method, body))
  return handleHttpErrors(res)
}

export {fetchRandomData, handleHttpErrors}
