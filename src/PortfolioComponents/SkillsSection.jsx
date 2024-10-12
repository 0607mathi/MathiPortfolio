import React from 'react'
import '../Stylesheets/SkillSection.css'
import Data from '../Data.json'
const SkillsSection = () => {
    
  return (
    <div className='skill-section' id='skills'>
        <div className='heading' data-aos="fade-up">
            <span>Skills</span>
        </div>
        <div className='skills'>
        {
            Data.Skill_Section.map(data=>{
                return(
                    
                        <div className='entier-setup' key={data.skillid} data-aos="fade-up">
                                <div className='skill-name-logo'>
                                    <div className="skill-name">{data.skill}</div>
                                    <div className="logo"><img src={data.icon} alt={data.skill}/></div>
                                </div>
                                <div className="progress-bar">
                                    <div className="bg-bar">
                                    <div className="inner-bar" style={{width:data.level}}></div>
                                </div>
                            </div>
                        </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default SkillsSection