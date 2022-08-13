import React from 'react'

const CardImageWithContainer = ({
  className,
  src,
  alt,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <div className="w-full max-w-[140px] rounded-full overflow-hidden">
      <img className={`w-auto h-auto ${className}`} src={src} alt={alt} {...props} />
    </div>
  )
}

export default CardImageWithContainer
