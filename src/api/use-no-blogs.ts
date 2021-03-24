import {fetchRandomData} from "./utils"
import type {ErrorResponse, NoBlog} from "./types"
import {blogURL} from "./blog"
import {useQuery} from "react-query"

function useBlogs() {
  return useQuery<Array<NoBlog>, ErrorResponse>("app:noblogs", async () => {
    const data = await fetchRandomData(blogURL.base + "/noblogs", "GET")
    return data.all
  })
}

export default useBlogs
