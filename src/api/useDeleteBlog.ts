import {fetchRandomData} from "./utils"
import {blogURL} from "./blog"
import {useQueryClient, useMutation} from "react-query"

function useDeleteBlog() {
  const queryClient = useQueryClient()

  return useMutation(async (blogId: number) => {
    return (
      await fetchRandomData(blogURL.byId(blogId), "DELETE"),
      {
        onSuccess: () => queryClient.refetchQueries("app:blogs"),
      }
    )
  })
}

export default useDeleteBlog
