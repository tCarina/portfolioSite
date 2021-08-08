import img from '../media/homePic.jpeg'
import '../styling/home.css'

const Home = () => {
 return(
     <section className='home'>
         <div className="imageContainer">
        <img src={img} className='portfolioImage' alt='Carina Against a Red Background'/>
      </div>
      <div className='titleContainer'>
         <h1 className='title'>Carina Taveras</h1>
         <h2 className='subTitle'>Fullstack Web Developer</h2>
         </div>
     </section>
     
 )   
}

export default Home; 