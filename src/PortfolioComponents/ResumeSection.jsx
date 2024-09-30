import React from 'react'
import "../Stylesheets/ResumeSetion.css"
import Bg from "../assets/consensus-acc.jpg"
import mec from "../assets/mec-college-img.jpg"
import hsc from "../assets/kmhss-12.jpg"
import sslc from "../assets/kmhss-10.jpg"
import Banner from "../assets/consensus-banner.png" 

const ResumeSection = () => {
  return (
    <div className=" resume-section">
        <div className="heading"><span className=''>Resume</span></div>
        <div className='resume-container'>
            {/* consensus academy */}
        <div className="box ">
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
        {/* College */}
        <div className="box ">
            <img src={mec} alt="" className='bg-img'/>
            <div className="data">
                <div className="year">
                    <h3 className="yellow">2023-2024</h3>
                    <p className='insitute'>muthayammal engineering college</p>
                </div>
                <div className="roll">
                    <p className='yellow'>Anna</p> <p>University</p>
                </div>
                <div className='about-course'>
                    <p> "I have successfully completed my Bachelor of Technology (BTech) degree in the Information Technology (IT) field and am now ready to pursue a professional career in this dynamic and ever-evolving industry"</p>
                </div>
            </div>
        </div>
        {/* HSC School */}
        <div className="box ">
            <img src={hsc} alt="" className='bg-img'/>
            <div className="data">
                <div className="year">
                    <h3 className="yellow">2023-2024</h3>
                    <p className='insitute'>kalaimagal Matric higher secondary school</p>
                </div>
                <div className="roll">
                <p className='yellow'>State</p> <p>Board</p>
                </div>
                <div className='about-course'>
                    <p> "In 2020, I graduated from the 12th grade with excellent marks, showcasing my strong academic performance."</p>
                </div>
            </div>
        </div>
        {/* SSLC School */}
        <div className="box ">
            <img src={sslc} alt="" className='bg-img'/>
            <div className="data">
                <div className="year">
                    <h3 className="yellow">2023-2024</h3>
                    <p className='insitute'>kalaimagal Matric higher secondary school</p>
                </div>
                <div className="roll">
                    <p className='yellow'>State</p> <p>Board</p>
                </div>
                <div className='about-course'>
                    <p> "I completed my 10th standard with excellent marks in the year 2018, demonstrating a strong academic foundation."</p>
                </div>
            </div>
        </div>
        </div>
        <div className='download-resume'>
            <button >Download Resume</button>
        </div>
    </div>
  )
}

export default ResumeSection