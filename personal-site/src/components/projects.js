import project1 from '../media/p1.png'
import project2 from '../media/justBreathe.png'
import '../styling/projects.css'

const Projects = () => {
    return(
        <section>
        <h1>Projects</h1>
            <h2>Things I've Worked On</h2>
        <main className='projectsContainer'>
            <section className='projectSection'>
            <h2>Budget App</h2>
            <a href='https://budgetappfrontend.netlify.app' target ='blank'><img src={project1} alt='Budget App Screenshot' /></a>
            <a href='https://github.com/tCarina/budgeting-app'>Github</a>
            <p>This was a small solo project. This is user friendly mock site with full CRUD functionality where you can keep track of your purchases and income. This project was made using React, Javascript, HTML, and CSS on the frontend. On the backend I Express and Javascript. My next step for this site is to add a functional database using SQL and Queries.</p>
            </section>
            <div className='projectSection'>
            <h2>Just Breathe</h2>
            <a href='https://just-breathe-hackathon.netlify.app/'><img src={project2} alt='Anxiety App Screenshot'/></a>
            <a href='https://github.com/tCarina/Just_Breathe'>Github</a>
            <p>As well as contributing where needed, I was design lead on this project. Just Breathe is educational site about Anxiety and coping with it. Using the Youtube API we have a section to display videos on related topics. There is also a section to look through some coping techniques and allows you to go straight to the resource articles to help you learn more. When you enter the site there is an option to help reducing anxiety immediately by using a breathing exercise and using affirmations. This application was made using Javascript, Axios, CSS, and HTML.</p>
            </div>
        </main>
        </section>
    )
}

export default Projects