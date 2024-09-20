import '../Stylesheets/banner.css'
import BGImage from '../assets/darkspace.jpeg'
const Banner = () =>{
    return(
       <div className='bg-img-container'>
        <img src={BGImage} alt="Background imgage" />
        <div className='text-content'>
            <span className='yellow'>Hello !</span>
            <span >This is <span className='yellow'>Mathiyarasu</span></span>
            <span>I am a <span className='yellow'>Full Stack</span> Developer !</span>
        </div>
       </div>
    )
}
export default Banner