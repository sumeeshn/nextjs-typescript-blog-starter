import { ReactNode } from 'react'
import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: ReactNode
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="mx-auto">
      <div
        className={markdownStyles['markdown']}
      >{content}</div>
    </div>
  )
}

export default PostBody
