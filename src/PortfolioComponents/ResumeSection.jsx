import React from 'react'
import "../Stylesheets/ResumeSetion.css"
import Data from "../Data.json"

const ResumeSection = () => {
  return (
    <div className=" resume-section">
        <div className="heading"><span className='resume'>Resume</span></div>
        <div className='resume-container'>
            {/* consensus academy */}
            {
                Data.Resume_Section.map(data=>{
                    return(
                        <div className="box" key={data.course_id}>
                            <img src={data.background_img} alt="" className='bg-img'/>
                            <div className="data">
                                <div className="year">
                                    <h3 className="yellow">{data.year_of_Complection}</h3>
                                    <p className='insitute'>{data.insition_name}</p>
                                </div>
                                <div className="roll">
                                    <p className='yellow'>{data.roll_first_name}</p> <p>{data.roll_last_name}</p>
                                </div>
                                <div className='about-course'>
                                    <p> "{data.about_course}"</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className='download-resume'>
            <button >Download Resume</button>
        </div>
    </div>
  )
}

export default ResumeSection