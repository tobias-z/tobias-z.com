import {fetchRandomData} from "./utils"
import type {ErrorResponse} from "./types"
import type {BlogType} from "../app/routes/types"
import {blogURL} from "./blog"
import {useQueryClient, useMutation} from "react-query"

type BlogProps = {
  title: string
  description: string
  body: any
}

function useCreateBlog() {
  const queryClient = useQueryClient()

  return useMutation<BlogType, ErrorResponse, BlogProps>(
    async values => await fetchRandomData(blogURL.base, "POST", values),
    {
      onSuccess: () => queryClient.refetchQueries("app:blogs"),
    }
  )
}

export default useCreateBlog
