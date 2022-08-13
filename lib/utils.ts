import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPostProps, Path } from '@/types'

const root = process.cwd()

export async function getFiles(dataType: Path) {
  return fs.readdirSync(path.join(root, 'data', dataType), 'utf-8')
}

export async function getPostBySlug(dataType: Path, slug: string) {
  const source = fs.readFileSync(path.join(root, 'data', dataType, `${slug}.md`), 'utf8')

  const { data, content } = matter(source)

  return {
    frontMatter: data,
    markdownBody: content,
  }
}

export async function getAllPostsWithFrontMatterByPath(dataType: Path): Promise<BlogPostProps[]> {
  const files = fs.readdirSync(path.join(root, 'data', dataType))

  // @ts-ignore
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, 'data', dataType, postSlug), 'utf8')
    const { data } = matter(source)

    return [
      {
        root: dataType,
        frontMatter: data,
        slug: postSlug.replace('.md', ''),
      },
      ...allPosts,
    ]
  }, [])
}

export async function getAllPostsWithFrontMatter() {
  return [
    ...(await getAllPostsWithFrontMatterByPath('Algorithm')),
    ...(await getAllPostsWithFrontMatterByPath('Dev')),
    ...(await getAllPostsWithFrontMatterByPath('Til')),
  ].sort((a, b) => {
    if (
      new Date(a?.frontMatter.publishedDate).getTime() <
      new Date(b?.frontMatter.publishedDate).getTime()
    ) {
      return 1
    }
    return -1
  })
}
