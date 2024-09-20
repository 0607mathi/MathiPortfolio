import "../Stylesheets/DropdownNav.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BiHomeAlt2 } from "react-icons/bi";
import { PiUserListBold } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiServer } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const DropdownNav = () => {
    // drop down animation 
    AOS.init({
      duration: 400, 
      easing: "ease-in-out", 
      once: true,
    });
 
  return (
      <div className="dropdown">
        <a href="#"><BiHomeAlt2 className='icons'/><span className='menu-items'>Home</span></a>
        <a href="#"><PiUserListBold className='icons'/><span className='menu-items'>About</span></a>
        <a href="#"><CgNotes className='icons'/><span className='menu-items'>Resume</span></a>
        <a href="#"><AiOutlineThunderbolt className='icons'/><span className='menu-items'>Skills</span></a>
        <a href="#"><CiServer className='icons'/><span className='menu-items'>Project</span></a>
        <a href="#"><IoCallOutline className='icons'/><span className='menu-items'>Contact</span></a>
      </div>
  )
}
export default DropdownNav
