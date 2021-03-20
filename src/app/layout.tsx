import {Container} from "react-bootstrap"

type LayoutProps = {
  element: JSX.Element
}

function Layout({element}: LayoutProps) {
  return (
    <main>
      <Container>{element}</Container>
    </main>
  )
}

export default Layout
