import React from 'react'
import '../Stylesheets/ProjectCompletion.css'
import Data from '../Data.json'
const ProjectCompletion = () => {
  return (
    <div className='project-completion'>
        <div><p className='yellow'>{Data.Projects_Section.length}</p><p>Projects Completed</p></div>
        <button>Download Resume</button>
    </div>
  )
}

export default ProjectCompletion