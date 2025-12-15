import { Link, useLocation } from "react-router-dom"
import type { FooterProps } from "../../interfaces/Footer/Footer"

const Footer = ({footer}: FooterProps) => {
    const location = useLocation();
  return (
    <footer className="w-full text-center gap-[30px] pt-[30px] pb-[23px] md:py-[30px] md:p-8 lg:px-28">
      <div className="flex flex-col-reverse items-center gap-[30px] md:flex-row md:justify-start md:gap-3.5">
        <strong className="text-xl leading-6 font-normal">{footer.content}</strong>
        <ul className="flex flex-col gap-3.5 text-center md:flex-row">
            {footer.links.map((link, index) => (
                <li key={index}>
                    <Link to={link.href || '/'} className={`${location.pathname === link.href ? 'pb-[5px] border-b border-Eerie-Black dark:border-white' : ''} text-xl leading-6 font-normal`}>{link.text}</Link>
                </li>
            ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
