import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

import { BlogPostProps } from '@/types'
import { getFiles, getPostBySlug } from '@/lib/utils'

import PostCodeBlock from '@/components/Post/PostCodeBlock'
import PostLayout from '@/components/Post/PostLayout'

const BlogPost = ({ frontMatter, markdownBody }: BlogPostProps) => {
  if (!frontMatter) {
    return null
  }

  return (
    <PostLayout {...frontMatter}>
      <ReactMarkdown
        components={{
          img: ({ placeholder, src, ...props }) => (
            <Image src={src ?? ''} placeholder="blur" {...props} />
          ),
          code: (props) => <PostCodeBlock {...props} />,
        }}>
        {markdownBody}
      </ReactMarkdown>
    </PostLayout>
  )
}

export async function getStaticProps({ params }: Params) {
  const { frontMatter, markdownBody } = await getPostBySlug('Til', params.slug)

  return {
    props: {
      frontMatter,
      markdownBody,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getFiles('Til')

  const paths = posts.map((filename: string) => ({
    params: {
      slug: filename.replace(/\.md/, ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default BlogPost
