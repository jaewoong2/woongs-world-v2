import React, { SVGAttributes } from 'react'

type Props = {} & SVGAttributes<SVGSVGElement>

const BlogIcon = React.forwardRef<SVGSVGElement, Props>(({ className, ...props }, ref) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      className={className}
      height="36px"
      width="36px"
      {...props}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M4 1h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H4z"
        clipRule="evenodd"
      />
      <path d="M4 5.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7z" />
      <path
        fillRule="evenodd"
        d="M4 3.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default BlogIcon
