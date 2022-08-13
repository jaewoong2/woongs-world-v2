import React, { DetailsHTMLAttributes, PropsWithChildren } from 'react'

const PostTag = React.forwardRef<
  HTMLElement,
  PropsWithChildren<DetailsHTMLAttributes<HTMLElement>>
>(({ className, children, ...props }, ref) => {
  return (
    <span
      className={`border rounded-lg p-1 px-2 mr-1 bg-slate-400 text-white font-thin ${className}`}
      {...props}
      ref={ref}>
      {children}
    </span>
  )
})

export default PostTag
