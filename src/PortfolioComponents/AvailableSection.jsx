import React from 'react'
import '../Stylesheets/AvailableSection.css'
import Data from '../Data.json'
const AvailableSection = () => {
    const data =Data.Available_Section[0]
  return (
    <div className='available-section' style={{backgroundImage:`${data.background_img}`}}>
        <div className='content heading'>
            <sapn>{data.roll_name_1}</sapn>
            <span className='yellow'>{data.roll_name_2}</span>
            <span>{data.roll_name_3}</span>
        </div>
        <div className='quotes'>
            <span>{data.quotes}</span>
        </div>
        <button>hire me</button>
    </div>
  )
}

export default AvailableSection