import React from 'react'
import '../Stylesheets/ContactSetion.css'
// import * as Icons from 'react-icons/fa6';
// import Data from '../Data.json'
import { FaGithub } from "react-icons/fa6";

export const ContactSetion = () => {
    const IconComponent = Icons[Data.Contact_Section[0].icon];
  return (
    <div className='contact-section br'>
        <div className='items'>
            <div className="box">
                < IconComponent />
                <p>address</p>
                <p>salem tamilnadu india 636309</p>
            </div>
        </div>
    </div>
  )
}
