import React from 'react'
import '../Stylesheets/About.css'
import Data from "../Data.json"
const About = () => {
  return (
    <div className='About-container'>
        
            <div className="header" data-aos="fade-up" id='about'><span className='yellow'>About</span>Me</div>
            <span className='about-quote' data-aos="fade-up">{Data.About_Section_Carrer_Objective}</span>
            <table className=''data-aos="fade-up">
                <tbody>
                {
                    Data.About_Section.map(data=>{
                        return(
                            <tr key={data.id}>
                                <td className='title '>{data.Question}</td>
                                <td>:</td>
                                <td className='answer '>{data.Answer}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
  )
}

export default About