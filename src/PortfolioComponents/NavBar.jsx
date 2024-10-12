import React, {useState } from 'react'
import "../Stylesheets/NavBar.css"
import { BiHomeAlt2 } from "react-icons/bi";
import { PiUserListBold } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiServer } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import DropdownNav from './DropdownNav';
const NavBar = () => {
  const [dropdownOnOff,setDropdownOnOff]=useState(false);
  return (
    <div className='nav-bar' id='home'>
      <div className='Navbar-container'>
        {/* nav-bar section */}
        <div className='name'>
           <p>Mathiyarasu</p>
        </div>
        <div className='menus'>
                <a href="#"><BiHomeAlt2 className='icons'/><span className='menu-items'>Home</span></a>
                <a href="#about"><PiUserListBold className='icons'/><span className='menu-items'>About</span></a>
                <a href="#resume"><CgNotes className='icons'/><span className='menu-items'>Resume</span></a>
                <a href="#skills"><AiOutlineThunderbolt className='icons'/><span className='menu-items'>Skills</span></a>
                <a href="#project"><CiServer className='icons'/><span className='menu-items'>Project</span></a>
                <a href="#contact"><IoCallOutline className='icons'/><span className='menu-items'>Contact</span></a>
        </div>
        <div className='menu-button' onClick={()=>{setDropdownOnOff(prevState => !prevState)}}>{dropdownOnOff==false?<TiThMenu className='menu-icon'/>:<IoClose className='close-icon'/>}</div>
      </div>
      {/* in here the drop down menu rendering the condition statement Ternory operator*/}
      {dropdownOnOff==true?<div className=' dropdown-container'><DropdownNav/></div>:""}
    </div>
  )
}

export default NavBar