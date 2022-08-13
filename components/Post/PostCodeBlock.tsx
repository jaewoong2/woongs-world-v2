import { CodeProps } from 'react-markdown/lib/ast-to-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const PostCodeBlock = ({ children, lang }: CodeProps) => {
  return (
    <div className="code-block">
      <SyntaxHighlighter language={lang} style={a11yDark}>
        {children.toString().replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  )
}

export default PostCodeBlock
