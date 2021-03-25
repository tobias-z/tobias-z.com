import * as React from "react"

function useLocalStorageState<S>(
  storageKey: string,
  initialState: S
): [S, React.Dispatch<React.SetStateAction<S>>] {
  const [state, setState] = React.useState<S>(() => {
    let value: S
    try {
      value = JSON.parse(window.localStorage.getItem(storageKey) ?? "")
    } catch (error: unknown) {
      value = initialState
    }
    return value
  })

  React.useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(state))
  }, [initialState, state, storageKey])

  return [state, setState]
}

export default useLocalStorageState
