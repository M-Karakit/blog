import type { NewsLetterProps } from "../../interfaces/NewsLetter/NewsLetter"

const NewsLetter = ({newsLetter}: NewsLetterProps) => {
  return (
    <div className="flex flex-col mt-5 md:items-center md:mt-[72px] lg:mt-0 px-8">
      <div className="md:text-center">
        <p className="text-base text-center leading-6 font-semibold text-Slate_Blue mb-3">{newsLetter.header}</p>
        <h1 className="text-5xl leading-[60px] font-semibold mb-6">{newsLetter.title}</h1>
        <p className="text-xl leading-[30px] font-normal text-AuroMetal dark:text-white mb-10 max-w-3xl md:px-3">{newsLetter.subTitle}</p>
      </div>
      <div className="flex flex-col gap-4 md:gap-2">
        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <input type="email"
                className="w-full max-w-[360px] md:w-[360px] py-3 ps-4 pe-3.5 border border-[#D0D5DD] rounded-lg shadow-[0px_1px_2px_#1018280D] placeholder:text-AuroMetal dark:placeholder:text-white" 
                placeholder={newsLetter.placeholder} 
            />
            <button type="submit" className="w-[118px] py-3 px-5 rounded-lg bg-Slate_Blue text-base leading-6 font-medium text-white">{newsLetter.button.text}</button>
        </div>
            <p className="text-sm font-normal text-AuroMetal leading-5 dark:text-white">{newsLetter.footer.text} <span className="underline">{newsLetter.footer.span}</span></p>
      </div>
    </div>
  )
}

export default NewsLetter
