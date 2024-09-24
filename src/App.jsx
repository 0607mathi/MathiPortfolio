import './App.css'
import About from './PortfolioComponents/About'
import Banner from './PortfolioComponents/Banner'
import NavBar from './PortfolioComponents/NavBar'
import ProjectCompletion from './PortfolioComponents/ProjectCompletion'
import ResumeSection from './PortfolioComponents/ResumeSection'
function App() {
  return (
    <>
      <div className='container-portfoio'>
        <NavBar/>
        <Banner/>
        <About/>
        <ProjectCompletion/>
        <ResumeSection/>
      </div>
    </>
  )
}

export default App
