import * as React from "react"

type Props = {
  hasError: boolean
  error: string
}

class ErrorBoundary extends React.Component<{}, Props> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: "",
    }
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error: error.message,
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`Error: ${error}: ${errorInfo}`)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="alert alert-dark" role="alert">
          <p>Ups something went wrong:</p>
          <pre className="text-danger">{this.state.error}</pre>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
