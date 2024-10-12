import React from 'react'
import '../Stylesheets/ProjectCompletion.css'
import Data from '../Data.json'
const ProjectCompletion = () => {
  return (
    <div className='project-completion' data-aos="fade-up">
        <div><p className='yellow'>{Data.Projects_Section.length}</p><p>Projects Completed</p></div>
        <button onClick={()=>{window.open(Data.Resume_Download[0].link,'_blank')}}>Download Resume</button>
    </div>
  )
}

export default ProjectCompletion