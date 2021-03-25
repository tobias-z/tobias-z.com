function makeHeaders() {
  return {
    "Content-type": "application/json",
    Accept: "application/json",
  }
}

function handleHttpErrors(res: Response) {
  if (!res.ok) {
    return Promise.reject({status: res.status, fullError: res.json()})
  }
  return res.json()
}

export {handleHttpErrors, makeHeaders}
