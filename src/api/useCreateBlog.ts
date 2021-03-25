import {useQueryClient, useMutation} from "react-query"
import type {BlogType} from "../app/routes/types"
import type {ErrorResponse} from "./types"
import {handleHttpErrors, makeHeaders} from "./utils"
import {blogURL} from "./blog"

type BlogProps = {
  title: string
  description: string
  body: string
}

function useCreateBlog() {
  const queryClient = useQueryClient()

  return useMutation<BlogType, ErrorResponse, BlogProps>(
    async values => {
      const res = await fetch(blogURL.base, {
        method: "POST",
        headers: makeHeaders(),
        body: JSON.stringify(values),
      })
      return handleHttpErrors(res)
    },
    {
      onSuccess: () => queryClient.refetchQueries("app:blogs"),
    }
  )
}

export default useCreateBlog
