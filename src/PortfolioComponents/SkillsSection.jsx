import React from 'react'
import '../Stylesheets/SkillSection.css'
import { PiFileSqlBold } from "react-icons/pi";
import { FaJava } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io";
import { SiReactbootstrap } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa6";
const SkillsSection = () => {
    const Icons = ["<FaJava />"]
  return (
    <div className='skill-section'>
        <div className='heading'>
            <span>Skills</span>
        </div>
        <div className='skills'>
            {/* java */}
            <div className='entier-setup'>
            <div className='skill-name-logo'>
                <div className="skill-name">Java</div>
                <div className="logo"><FaJava /></div>
            </div>
            <div className="progress-bar">
                <div className="bg-bar">
                    <div className="inner-bar"></div>
                </div>
            </div>
            </div>
            {/* sql */}
            <div className='entier-setup'>
            <div className='skill-name-logo'>
                <div className="skill-name">SQl</div>
                <div className="logo"> <PiFileSqlBold /> </div>
            </div>
            <div className="progress-bar">
                <div className="bg-bar">
                    <div className="inner-bar"></div>
                </div>
            </div>
            </div>
            {/* html */}
            <div className='entier-setup'>
            <div className='skill-name-logo'>
                <div className="skill-name">HTML5</div>
                <div className="logo"> <TiHtml5 /> </div>
            </div>
            <div className="progress-bar">
                <div className="bg-bar">
                    <div className="inner-bar"></div>
                </div>
            </div>
            </div>
            {/* css */}
            <div className='entier-setup'>
            <div className='skill-name-logo'>
                <div className="skill-name">CSS3</div>
                <div className="logo"> <FaCss3 /> </div>
            </div>
            <div className="progress-bar">
                <div className="bg-bar">
                    <div className="inner-bar"></div>
                </div>
            </div>
            </div>
            {/* bootstrap */}
            <div className='entier-setup'>
            <div className='skill-name-logo'>
                <div className="skill-name">Bootstrap</div>
                <div className="logo"> <SiReactbootstrap /> </div>
            </div>
            <div className="progress-bar">
                <div className="bg-bar">
                    <div className="inner-bar"></div>
                </div>
            </div>
            </div>
            {/* js */}
            <div className='entier-setup'>
            <div className='skill-name-logo'>
                <div className="skill-name">Java Script</div>
                <div className="logo"> <IoLogoNodejs /> </div>
            </div>
            <div className="progress-bar">
                <div className="bg-bar">
                    <div className="inner-bar"></div>
                </div>
            </div>
            </div>
            {/* react+vite */}
            <div className='entier-setup'>
            <div className='skill-name-logo'>
                <div className="skill-name">React+Vite</div>
                <div className="logo"> <TbBrandVite /> </div>
            </div>
            <div className="progress-bar">
                <div className="bg-bar">
                    <div className="inner-bar"></div>
                </div>
            </div>
            </div>
            {/* git */}
            <div className='entier-setup'>
            <div className='skill-name-logo'>
                <div className="skill-name">Git</div>
                <div className="logo"> <FaGitAlt /> </div>
            </div>
            <div className="progress-bar">
                <div className="bg-bar">
                    <div className="inner-bar"></div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsSection