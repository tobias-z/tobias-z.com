import {fetchRandomData} from "./utils"
import type {ErrorResponse, NoBlog} from "./types"
import {blogURL} from "./blog"
import {useQuery} from "react-query"

function useNoBlogs() {
  return useQuery<Array<NoBlog>, ErrorResponse>("app:noblogs", async () => {
    const data = await fetchRandomData(blogURL.withNoBlog, "GET")
    return data.all
  })
}

export default useNoBlogs
