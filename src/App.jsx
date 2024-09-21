import './App.css'
import About from './PortfolioComponents/About'
import Banner from './PortfolioComponents/Banner'
import NavBar from './PortfolioComponents/NavBar'
function App() {
  return (
    <>
      <div className='container-portfoio'>
        <NavBar/>
        <Banner/>
        <About/>
      </div>
    </>
  )
}

export default App
