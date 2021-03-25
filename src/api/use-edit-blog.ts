import {useQueryClient, useMutation} from "react-query"
import {BlogType} from "../app/routes/types"
import {handleHttpErrors, makeHeaders} from "./utils"
import {blogURL} from "./blog"

function useEditBlog() {
  const queryClient = useQueryClient()

  return useMutation<BlogType, Error, BlogType>(
    async (blog): Promise<BlogType> => {
      const response = await fetch(blogURL.byId(blog.id), {
        method: "PUT",
        headers: makeHeaders(),
        body: JSON.stringify(blog),
      })
      return handleHttpErrors(response)
    },
    {
      onSuccess: () => queryClient.refetchQueries("app:blogs"),
    }
  )
}

export default useEditBlog
