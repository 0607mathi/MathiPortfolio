import React from 'react'
import '../Stylesheets/About.css'
import Data from "../Data.json"
const About = () => {
  return (
    <div className='About-container'>
        
            <div className="header"><span className='yellow'>About</span>Me</div>
            <span className='about-quote'>{Data.About_Section_Carrer_Objective}</span>
            <table className=''>
                {
                    Data.About_Section.map(data=>{
                        return(
                            <tr key={data.id}>
                                <td className='title '>{data.Question}</td> <td>:</td>
                                <td className='answer '>{data.Answer}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
  )
}

export default About