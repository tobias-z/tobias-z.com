import {fetchRandomData} from "./utils"
import {BlogType} from "../app/routes/types"
import {blogURL} from "./blog"
import {useQueryClient, useMutation} from "react-query"

function useEditBlog() {
  const queryClient = useQueryClient()

  return useMutation<BlogType, Error, BlogType>(
    async blog => await fetchRandomData(blogURL.byId(blog.id), "PUT", blog),
    {
      onSuccess: () => queryClient.refetchQueries("app:blogs"),
    }
  )
}

export default useEditBlog
