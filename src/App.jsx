import './App.css'
import About from './PortfolioComponents/About'
import Banner from './PortfolioComponents/Banner'
import NavBar from './PortfolioComponents/NavBar'
import ProjectCompletion from './PortfolioComponents/ProjectCompletion'
import ProjectSection from './PortfolioComponents/ProjectSection'
import ResumeSection from './PortfolioComponents/ResumeSection'
import SkillsSection from './PortfolioComponents/SkillsSection'
function App() {
  return (
    <>
      <div className='container-portfoio'>
        <NavBar/>
        <Banner/>
        <About/>
        <ProjectCompletion/>
        <ResumeSection/>
        <SkillsSection />
        <ProjectSection />
      </div>
    </>
  )
}

export default App
