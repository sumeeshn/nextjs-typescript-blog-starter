import Author from './author'

export type PostDataType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  content: string
}

type PostType = {
  data: PostDataType
  content: string
  filePath: string
}

export default PostType
