import React from 'react'
import '../Stylesheets/About.css'
const About = () => {
  return (
    <div className='About-container'>
        
            <div className="header"><span className='yellow'>About</span>Me</div>
            <span className='about-quote'>To improve my skills and knowledge in technology and shape my professional career along with the organizational growth.</span>
            <table className=''>
                    <tr className=''>
                        <td className='title '>Name</td> <td className=''>:</td>
                        <td className='answer '>Mathiyarasu</td>
                    </tr>
                    <tr className=''>
                        <td className='title '>Date of Birth</td><td>:</td>
                        <td className='answer '>September 06, 2002</td>
                    </tr>
                    <tr className=''>
                        <td className='title '>Address</td><td>:</td>
                        <td className='answer '>Salem Tamilnadu, India</td>
                    </tr>
                    <tr className=''>
                        <td className='title '>Zip Code</td><td>:</td>
                        <td className='answer '>636309</td>
                    </tr>
                    <tr className=''>
                        <td className='title '>Email</td><td>:</td>
                        <td className='answer '>Mathiyarasu.m0607@gmail.com</td>
                    </tr>
                    <tr className=''>
                        <td className='title '>Phone</td><td>:</td>
                        <td className='answer '>+91 8248477166</td>
                    </tr>
            </table>
        </div>
  )
}

export default About