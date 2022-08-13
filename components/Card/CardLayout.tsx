import { PropsWithChildren } from 'react'

const CardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full desktop:w-[calc((100%-1024px)/2)] flex flex-col items-center gap-2">
      <div className="w-fit flex-col border gap-2 rounded-xl flex justify-center p-10 desktop:flex-col tablet:flex-row tablet:w-full desktop:w-fit">
        {children}
      </div>
    </div>
  )
}

export default CardLayout

//   <div className="w-full max-w-[140px] rounded-full overflow-hidden">
//     <img
//       className="w-auto h-auto"
//       src="https://avatars.githubusercontent.com/u/63512217?v=4"
//       alt="임재웅"
//     />
//   </div>
//   <p className="w-full">Lim Jaewoong</p>
//   <p className="w-full">SoongSil Univ.</p>
//   <div className="w-full flex justify-between">
//     <GithubIcon className="w-[24px] h-[24px] cursor-pointer" />
//     <BlogIcon width="24px" height="24px" className="cursor-pointer" />
//   </div>
