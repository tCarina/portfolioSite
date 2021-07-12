import img from '../media/received_2882882215302218_3.jpeg'
import '../styling/home.css'

const Home = () => {
 return(
     <section className='home'>
         <div className="imageContainer">
        <img src={img} className='portfolioImage'/>
      </div>
      <div className='titleContainer'>
         <h1>Carina Taveras</h1>
         <h2>Fullstack Web Developer</h2>
         </div>
     </section>
     
 )   
}

export default Home; 