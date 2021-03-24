import * as React from "react"

function useLocalStorageState(
  storageKey: string,
  initialState: any
): [any, React.Dispatch<any>] {
  const [state, setState] = React.useState(() => {
    let value: any
    try {
      value = window.localStorage.getItem(storageKey || initialState)
    } catch (error) {
      // Ignore
    }
    return value
  })

  React.useEffect(() => {
    window.localStorage.setItem(storageKey, state)
  }, [initialState, state, storageKey])

  return [state, setState]
}

export default useLocalStorageState
