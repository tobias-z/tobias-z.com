import {useQuery} from "react-query"
import type {Blogs} from "../app/routes/types"
import {handleHttpErrors} from "./utils"
import type {ErrorResponse} from "./types"
import {blogURL} from "./blog"

function useBlogs() {
  return useQuery<Blogs, ErrorResponse>("app:blogs", async () => {
    const res = await fetch(blogURL.base)
    return handleHttpErrors(res)
  })
}

export default useBlogs
