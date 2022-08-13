import { PropsWithChildren } from 'react'
import PostTag from './PostTag'

type Props = {
  title: string
  publishedDate: string
  tags: string[]
}

const PostLayout = ({ title, tags, publishedDate, children }: PropsWithChildren<Props>) => {
  return (
    <section className="w-full mx-auto border rounded-lg px-10 py-5">
      <header className="h-fit pb-4">
        <h2 className="text-2xl font-normal mb-5">{title}</h2>
        <div className="flex items-center justify-between">
          <div>
            {tags?.map((tag) => (
              <PostTag key={tag}>{tag}</PostTag>
            ))}
          </div>
          <p>{publishedDate}</p>
        </div>
      </header>
      <hr />
      <div className="mt-5">{children}</div>
    </section>
  )
}

export default PostLayout
