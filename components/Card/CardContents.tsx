import BlogIcon from '../Icons/BlogIcon'
import GithubIcon from '../Icons/GithubIcon'

const GITHUB_URI = 'https://github.com/jaewoong2/'
const VELOG = 'https://velog.io/@jwisgenius'

type Props = {
  paragraphs: string[]
}

const CardContents = ({ paragraphs }: Props) => {
  return (
    <>
      <div className="tablet:w-full tablet:flex tablet:flex-col tablet:justify-center tablet:gap-5 desktop:flex-row desktop:block">
        {paragraphs?.map((paragraph) => (
          <p className="w-full">{paragraph}</p>
        ))}
      </div>
      <div className="flex gap-5 justify-between tablet:justify-center tablet:flex-col desktop:flex-row desktop:justify-between">
        <a href={GITHUB_URI} rel="noreferrer" target="_blank" className="flex gap-2">
          <GithubIcon className="w-[24px] h-[24px] cursor-pointer" />
          <p className="sr-only desktop:sr-only tablet:not-sr-only">{GITHUB_URI}</p>
        </a>
        <a href={VELOG} rel="noreferrer" target="_blank" className="flex gap-2">
          <BlogIcon width="24px" height="24px" className="cursor-pointer" />
          <p className="sr-only desktop:sr-only tablet:not-sr-only">{VELOG}</p>
        </a>
      </div>
    </>
  )
}

export default CardContents
