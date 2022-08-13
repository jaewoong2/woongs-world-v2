import { TIL, DEV, ALGORITHM } from '../constants/index'

export type BlogFrontMatter = {
  title: string
  description?: string
  publishedDate: string
  tags: string[]
}

export type BlogLayoutProps = {
  children: React.ReactNode
  frontMatter: BlogFrontMatter
  wordCount: number
  readingTime: string
}

export type BlogPostProps = {
  root: string
  slug: string
  siteTitle?: string
  frontMatter: BlogFrontMatter
  markdownBody?: any
  wordCount?: number
  readingTime?: string
}

export type BlogPostsProps = {
  posts?: BlogPostProps[]
}

export interface BlogProps extends BlogPostsProps {
  title: string
  description: string
}

export type Path = typeof TIL | typeof DEV | typeof ALGORITHM
