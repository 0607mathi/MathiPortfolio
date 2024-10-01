import './App.css'
import About from './PortfolioComponents/About'
import Banner from './PortfolioComponents/Banner'
import NavBar from './PortfolioComponents/NavBar'
import ProjectCompletion from './PortfolioComponents/ProjectCompletion'
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
      </div>
    </>
  )
}

export default App
