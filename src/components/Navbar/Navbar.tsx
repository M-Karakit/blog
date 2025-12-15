import { useState, useEffect } from "react"
import type { NavProps } from "../../interfaces/NavBar/NavBar"
import { Link, useLocation } from "react-router-dom"

const Navbar = ({navProps}: {navProps: NavProps}) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const closeMenu = () => setIsMenuOpen(false)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const location = useLocation();

    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        if (currentTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [currentTheme]);

  return (
      <nav className={`${isMenuOpen ? 'flex-col gap-[54px] h-screen justify-center relative' : 'flex-row'} flex md:flex-row justify-between items-center py-5 px-5 lg:py-2.5 lg:px-[7.7777vw] lg:pt-[30px] lg:pb-[30px]`}>
        <h1 className="text-lg lg:text-[20px] text-Eerie-Black dark:text-white font-semibold leading-6 w-fit">{navProps.user}</h1>
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex md:flex-row flex-col md:justify-between items-center gap-3.5`}>
            <div className={`${isMenuOpen ? 'flex-col' : 'hidden'} md:flex md:flex-row justify-between items-center md:gap-3.5`}>
                <ul className="flex flex-col items-center md:flex-row gap-5 md:gap-3.5">
                    {navProps.links.map((link, index) => (
                        <li className="p-2" key={index}>
                            <Link to={link.href} className={`${location.pathname === link.href ? 'pb-[5px] border-b border-Eerie-Black dark:border-white' : ''} text-lg lg:text-xl leading-6 font-normal`} onClick={closeMenu}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
            <div className={`flex justify-center items-center gap-4 mt-5 md:mt-0 rounded-full py-2 px-4 transition-colors duration-300 ${
                currentTheme === 'light' ? 'bg-white' : 'bg-Ebony' 
            }`}>
                <button onClick={toggleTheme} className={`rounded-full transition-all duration-500 ${
                    currentTheme === 'light' ? 'bg-Ebony' : 'bg-transparent'
                }`}>
                    <img 
                        src={navProps.themeToggle.lightIcon} 
                        alt="light-mode" 
                        className={`transition-opacity duration-300 ${
                            currentTheme === 'light' ? 'opacity-0' : 'opacity-100'
                        }`}
                    />
                </button>
                
                <button onClick={toggleTheme} className={`rounded-full transition-all duration-300 ${
                    currentTheme === 'dark' ? 'bg-white' : 'bg-transparent'
                }`}>
                    <img 
                        src={navProps.themeToggle.darkIcon} 
                        alt="dark-mode" 
                        className={`transition-opacity duration-300 ${
                            currentTheme === 'dark' ? 'opacity-0' : 'opacity-100'
                        }`}
                    />
                </button>
            </div>
            </div>
         </div>
         <div onClick={toggleMenu} className={`md:hidden ${isMenuOpen && 'absolute bottom-5'}`}>
            <img src={isMenuOpen ? navProps.closeIcon : navProps.menuIcon}
            alt={isMenuOpen ? "close-icon" : "menu-icon"}
            className={(currentTheme === 'light' && isMenuOpen) || (currentTheme === 'dark' && !isMenuOpen)  ? 'invert' : ''} />
        </div>
      </nav>
  )
}

export default Navbar
