import * as React from "react"

function useLocalStorageState<T>(
  storageKey: string,
  initialState: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = React.useState<T>(() => {
    let value: T
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
