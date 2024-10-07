import './App.css'
import About from './PortfolioComponents/About'
import AvailableSection from './PortfolioComponents/AvailableSection'
import Banner from './PortfolioComponents/Banner'
import { ContactSection } from './PortfolioComponents/ContactSection'
import LinkSection from './PortfolioComponents/LinkSection'
import NavBar from './PortfolioComponents/NavBar'
import ProjectCompletion from './PortfolioComponents/ProjectCompletion'
import ProjectSection from './PortfolioComponents/ProjectSection'
import ResumeSection from './PortfolioComponents/ResumeSection'
import SkillsSection from './PortfolioComponents/SkillsSection'
import VersionSetion from './PortfolioComponents/VersionSetion'
function App() {
  return (
    <>
      <div className='container-portfoio'>
        <NavBar />
        <Banner />
        <About />
        <ProjectCompletion />
        <ResumeSection />
        <SkillsSection />
        <ProjectSection />
        <AvailableSection />
        <ContactSection />
        <LinkSection />
        <VersionSetion />
      </div>
    </>
  )
}

export default App
