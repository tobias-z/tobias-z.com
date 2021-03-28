import type {FixedObject} from "gatsby-image"

type ImageFixed = {
  file: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
}

export type {ImageFixed}
