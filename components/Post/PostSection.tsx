import PostList from '@/components/Post/PostList'
import { BlogPostProps } from '@/types'

type Props = {
  posts: BlogPostProps[]
  title?: string
  description?: string
}

const PostSection = ({ posts, title, description }: Props) => {
  return (
    <section className="border rounded-xl px-3 pb-3 pt-1 flex flex-col gap-4 w-full">
      <h2 className="text-2xl">{title}</h2>
      <span className="sr-only">{description}</span>
      <PostList posts={posts} />
    </section>
  )
}

export default PostSection
