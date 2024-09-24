import React from 'react'
import "../Stylesheets/ResumeSetion.css"
import Bg from "../assets/consensus-acc.jpg"
import Banner from "../assets/consensus-banner.png" 
const ResumeSection = () => {
  return (
    <div className='resume-container br'>
        <div className="box br">
            <img src={Bg} alt="" className='bg-img'/>
            <div className="data">
                <div className="year">
                    <h3 className="yellow">2023-2024</h3>
                    <img src={Banner} alt="" className=''/>
                </div>
                <div className="roll">
                    <p className='yellow'>i am </p> <p>a trained fresher</p>
                </div>
                <div className='about-course'>
                    <p> "I have learned and successfully completed Java fundamentals and data structures at the Consensus Academy during the year 2023-2024."</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResumeSection