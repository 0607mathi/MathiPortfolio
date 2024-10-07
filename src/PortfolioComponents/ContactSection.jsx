import React from 'react'
import '../Stylesheets/ContactSection.css'
import Data from '../Data.json'
export const ContactSection = () => {
  return (
    <div className='contact-section'>
            <div>
                <div className="header">Contact</div>
            </div>
        <div className='items br'>
           {
            Data.Contact_Section.map(data=>{
                return(
                    <div className="boxs" key={data.icon_id}>
                        <img src={data.icon} alt={data.icon_name} className='icon'/>
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