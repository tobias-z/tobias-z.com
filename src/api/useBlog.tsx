import {fetchRandomData} from "./utils"
import type {BlogType} from "../app/routes/types"
import {blogURL} from "./blog"
import {useQuery} from "react-query"

function useBlog(title: string) {
  return useQuery<BlogType, Error>("app:blog", async () => {
    const data = await fetchRandomData(blogURL.byTitle(title), "GET")
    return data
  })
}

export default useBlog
