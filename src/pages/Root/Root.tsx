import { Outlet } from "react-router-dom";
import type { NavProps } from "../../interfaces/NavBar/NavBar"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { footerData } from "../../Data/Footer/FooterData";

interface RootProps {
    navProps: NavProps;
}

const Root = ({navProps}: RootProps) => {
    
  return (
    <div className="bg-white dark:bg-Ebony text-Eerie-Black dark:text-white">
      <Navbar navProps={navProps}/>
      <Outlet />
      <Footer footer={footerData} />
    </div>
  )
}

export default Root
