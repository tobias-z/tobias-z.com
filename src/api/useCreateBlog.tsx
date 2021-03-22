import {fetchRandomData} from "./utils"
import type {BlogType} from "../app/routes/types"
import {blogURL} from "./blog"
import {useQueryClient, useMutation} from "react-query"

type ApiError = {
  status: number
  fullError: () => Promise<{
    code: string
    message: string
  }>
}

function useCreateBlog() {
  const queryClient = useQueryClient()

  return useMutation<BlogType, Error>(
    async values => await fetchRandomData(blogURL.base, "POST", values),
    {
      onSuccess: () => queryClient.refetchQueries("app:blogs"),
    }
  )
}

export default useCreateBlog
