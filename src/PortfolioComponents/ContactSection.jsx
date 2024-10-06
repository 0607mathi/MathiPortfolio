import React from 'react'
import '../Stylesheets/ContactSection.css'
// import * as Icons from 'react-icons/fa6';
// import * as Icons from 'react-icons/fa';
// import * as Icons from 'react-icons/gr';
import Data from '../Data.json'

export const ContactSection = () => {
  return (
    <div className='contact-section'>
            <div>
                <div className="header">Contact</div>
            </div>
        <div className='items'>
           {
            Data.Contact_Section.map(data=>{
                // let IconComponent = Icons[data.icon];
                return(
                    <div className="boxs" key={data.icon_id}>
                        <img src={insta} alt="" className='icon'/>
                        <span className='question'>{data.icon_name}</span>
                        <span className='answer'>{data.icon_data}</span>
                    </div>
                )
            })
           }
        </div>
    </div>
  )
}