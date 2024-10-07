import React from 'react'
import '../Stylesheets/LinkSection.css'
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
const LinkSection = () => {
  return (
    <div className='link-section'>
        <div className="links">
            <h3 className=''>
                <div className="yellow">Have</div>
                <span>a Question ?</span>
            </h3>
            <div className="link-items">
                <div className="icon-ans">
                    < IoLocationSharp className='yellow'/>
                    <span className='link-data'>Salem Tamilnadu India 636309</span>
                </div>
                <div className="icon-ans">
                    <IoCall className='yellow'/>
                    <span className='link-data'>+91 8248477166</span>
                </div>
                <div className="icon-ans">
                    <LuMail className='yellow'/>
                    <span className='link-data'>mathiyarasu.m0607@gmail.com</span>
                </div>
                <div className="icon-ans">
                    <FaWhatsapp className='yellow'/>
                    <span className='link-data'>Whatsapp</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LinkSection