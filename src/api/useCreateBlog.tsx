import {fetchRandomData} from "./utils"
import type {BlogType} from "../app/routes/types"
import {blogURL} from "./blog"
import {useQueryClient, useMutation} from "react-query"


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
