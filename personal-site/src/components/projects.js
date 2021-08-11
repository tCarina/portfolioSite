import project1 from '../media/p1.png'
import project2 from '../media/emoShop.png'
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
            <p>A user friendly mock site with full CRUD functionality where you can keep track of your purchases and income. This project was made using React, Javascript, HTML, and CSS on the frontend. On the backend I Express and Javascript. My next step for this site is to add a functional database using SQL and Queries.</p>
            </section>
            <div className='projectSection'>
            <h2>One Stop Emo Shop</h2>
            <a href='https://unruffled-tereshkova-ccd7eb.netlify.app/'><img src={project2} alt='Mock Shop App Screenshot'/></a>
            <a href='https://github.com/tCarina/one-stop-emo-shop'>Github</a>
            <p>A mock e-commerce shop that sells emotions to make your life better. This site was built with full CRUD functionality. The backend was designed with express, sql, json web tokens. It also contains user auth to let you login for admin purposes. I personally built the New Product and Edit Product functionalities and contributed to building the backend which was completely collaborative. </p>
            </div>
        </main>
        </section>
    )
}

export default Projects