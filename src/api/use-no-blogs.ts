import {useQuery} from "react-query"
import type {ErrorResponse, NoBlog} from "./types"
import {handleHttpErrors} from "./utils"
import {blogURL} from "./blog"

function useNoBlogs() {
  return useQuery<NoBlog, ErrorResponse>(
    "app:noblogs",
    async (): Promise<NoBlog> => {
      const res = await fetch(blogURL.withNoBlog)
      return handleHttpErrors(res)
    }
  )
}

export default useNoBlogs
