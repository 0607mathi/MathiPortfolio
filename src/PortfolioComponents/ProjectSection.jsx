import React from 'react'
import '../Stylesheets/ProjectSection.css'
import Data from "../Data.json"
import ProjectCompletion from './ProjectCompletion'
const ProjectSection = () => {
  return (
    <div className='project-section'>  
        <div>
          <div className="heading">Projects</div>
        </div>
      <div className="project-box">
             {
              Data.Projects_Section.map(data=>{
                return(
                  <div className="projects" key={data.project_id}>
                    <img src={data.Project_Thambnail} alt={data.project_first_name+" "+data.project_last_name} />
                    <div className="project-name">
                      <span className="yellow">{data.project_first_name}</span>
                      <span>{data.project_last_name}</span>
                    </div>
                    <div className="prev-get">
                      <button className='code'>Code</button>
                      <button className='preview'>preview</button>
                    </div>
                  </div>
                )
              })
             }
      </div>
      <ProjectCompletion />
    </div>
  )
}

export default ProjectSection
