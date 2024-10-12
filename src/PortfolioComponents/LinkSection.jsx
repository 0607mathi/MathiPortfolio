import React from 'react'
import '../Stylesheets/LinkSection.css'
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import Data from '../Data.json'
const LinkSection = () => {
  return (
    <div className='link-section'>
        <div className="links">
            <h3 className=''>
                <div className="yellow">Have</div>
                <span>a Question ?</span>
            </h3>
            <div className="link-items">
                <div className="icon-ans" onClick={()=>{window.open(Data.Contact_Section[0].link,'_blank')}}>
                    < IoLocationSharp className='yellow'/>
                    <span className='link-data'>Salem Tamilnadu India 636309</span>
                </div>
                <div className="icon-ans" onClick={()=>{window.open(Data.Contact_Section[1].link,'_blank')}}>
                    <IoCall className='yellow'/>
                    <span className='link-data'>+91 8248477166</span>
                </div>
                <div className="icon-ans" onClick={()=>{window.open(Data.Contact_Section[2].link,'_blank')}}>
                    <LuMail className='yellow'/>
                    <span className='link-data'>mathiyarasu.m0607@gmail.com</span>
                </div>
                <div className="icon-ans" onClick={()=>{window.open('https://wa.me/8248477166','_blank')}}>
                    <FaWhatsapp className='yellow'/>
                    <span className='link-data'>Whatsapp</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LinkSection