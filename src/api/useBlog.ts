import {useQuery} from "react-query"
import type {BlogType} from "../app/routes/types"
import {handleHttpErrors} from "./utils"
import {blogURL} from "./blog"

function useBlog(title: string) {
  return useQuery<BlogType, Error>("app:blog", async () => {
    const res = await fetch(blogURL.byTitle(title))
    return handleHttpErrors(res)
  })
}

export default useBlog
