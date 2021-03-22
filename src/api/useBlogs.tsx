import {fetchRandomData} from "./utils"
import type {BlogType} from "../app/routes/types"
import {blogURL} from "./blog"
import {useQuery} from "react-query"

function useBlogs() {
  return useQuery<Array<BlogType>, Error>("app:blogs", async () => {
    const data = await fetchRandomData(blogURL.base, "GET")
    return data.all
  })
}

export default useBlogs