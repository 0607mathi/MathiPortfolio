import './App.css'
import About from './PortfolioComponents/About'
import Banner from './PortfolioComponents/Banner'
import NavBar from './PortfolioComponents/NavBar'
import ProjectCompletion from './PortfolioComponents/ProjectCompletion'
function App() {
  return (
    <>
      <div className='container-portfoio'>
        <NavBar/>
        <Banner/>
        <About/>
        <ProjectCompletion/>
      </div>
    </>
  )
}

export default App
