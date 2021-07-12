import img from '../media/aboutPic.jpg'
import '../styling/aboutMe.css'

const AboutMe = () => {
    return(
        <main className='aboutContainer'>
            <h1>About Me</h1>
            <h2>Compassionate, Creative, and A Little Nerdy</h2>
            <br />
            <img src={img} className='aboutPic' />
            <div className='textContainer'>
            <p id="aboutP">Hello! My name is Carina and I am a fullstack web engineer born and raised in Far Rockaway, Queens.<br/> 
            During my lifetime I have always loved working in team environments and with people of all different walks of life.<br/> 
            One of the things I love the most bout the tech industry is that I have been able to meet and work with people frum such diverse backgrounds. 
            Not only that, but I have always had a love for all things tech since I was young, thanks to my father. <br/>
            Since an early age, I've always been interested in taking things apart and learning to mod hardware.<br/> 
            With tech I get to combine all my interests as well as hopefully use all that I know to help marginalized and underrepresented communities such as the BIPOC and LGBTQ+ communities.<br/>
            Besides tech, I like to consider myself creative. I make resin art, make vinyl decals, and love to experiment with makeup.<br/> 
            I also dabble a bit in videogames, anime, and am an avid fan of anything relating to horror.<br/> 
            Please feel free to contact me if you'd like to know more about me, I look forward to hearing from you.</p>
            </div>


        </main>
    )
}

export default AboutMe; 