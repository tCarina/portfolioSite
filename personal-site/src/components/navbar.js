import { Link } from 'react-router-dom'
import '../styling/navBar.css'
import img from '../media/home.png'

const NavBar = () => {
    return(
        <div className='navContainer'>
            <nav>
                <Link to ='/' ><img src={img} className='homeIcon'/></Link>
                <Link to ='/aboutme' className='redirect'>About Me</Link>
                <Link to ='/projects' className='redirect'>Projects</Link>
                <Link to ='/contactme' className='redirect'>Contact Me</Link>
            </nav>
        </div>
    )
}


export default NavBar; 