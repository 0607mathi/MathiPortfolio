import React from 'react'
import '../Stylesheets/ProjectSection.css'
import QuizApp from '../assets/quiz app.png'
const ProjectSection = () => {
  return (
    <div className='project-section br'>
        <div>
          <div className="heading">Projects</div>
        </div>
      <div className="project-box br">
        
        <div className="projects">
          <img src={QuizApp} alt="project 01" className=''/>
          <div className="project-name">
            <span className="yellow">Quiz</span>
            <span> App</span>
          </div>
        </div>

        <div className="projects">
          <img src={QuizApp} alt="project 01" className=''/>
          <div className="project-name">
            <span className="yellow">Quiz</span>
            <span> App</span>
          </div>
        </div>

        <div className="projects">
          <img src={QuizApp} alt="project 01" className=''/>
          <div className="project-name">
            <span className="yellow">Quiz</span>
            <span> App</span>
          </div>
        </div>

        <div className="projects">
          <img src={QuizApp} alt="project 01" className=''/>
          <div className="project-name">
            <span className="yellow">Quiz</span>
            <span> App</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection