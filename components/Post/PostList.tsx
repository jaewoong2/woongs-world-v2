import { BlogPostProps } from '@/types'
import Link from 'next/link'
import PostTag from './PostTag'

type Props = {
  posts: BlogPostProps[]
}

const PostList = ({ posts }: Props) => {
  return (
    <>
      {posts.map(({ frontMatter, root, slug }) => (
        <section className="px-1 flex flex-col gap-1">
          <Link key={slug} href={`/${root}/${slug}`}>
            <h3 className="text-xl cursor-pointer">{frontMatter.title}</h3>
          </Link>
          <div className="flex text-gray-600 flex-col gap-1">
            <p>{frontMatter.publishedDate}</p>
            <div>
              {frontMatter.tags.map((tag) => (
                <PostTag>{tag}</PostTag>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

export default PostList
