import {useQueryClient, useMutation} from "react-query"
import {handleHttpErrors} from "./utils"
import {blogURL} from "./blog"

function useDeleteBlog() {
  const queryClient = useQueryClient()

  return useMutation(
    async (blogId: number) => {
      const res = await fetch(blogURL.byId(blogId), {method: "DELETE"})
      return handleHttpErrors(res)
    },
    {
      onSuccess: () => queryClient.refetchQueries("app:blogs"),
    }
  )
}

export default useDeleteBlog
