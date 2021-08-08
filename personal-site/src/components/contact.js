import githubLogo from "../media/GithubLogo.png";
import liLogo from "../media/LiLogo.png";
import "../styling/contactMe.css";
import { currentFact, onClick } from "./carinaFacts";

const Contact = () => {
  return (
    <main className="contactContainer">
      <div>
        <h1>Contact Me</h1>
        <section className="logos">
          <a href="https://github.com/tCarina" target="_blank">
            <img src={githubLogo} className="logo" alt="GithubLogo" />
          </a>

          <a href="https://linkedin.com/in/carina-taveras" target="_blank">
            <img src={liLogo} className="logo" alt="LinkedInLogo" />
          </a>
        </section>
      </div>

      <div>
        <section className="formContainer">
        <h2>Email Me</h2>
          <form
            action="https://formspree.io/f/mlearezv"
            method="POST"
            name="cForm"
            className="formParent"
          >
            <div>
              <p className='text'>Your email: </p>
              <label htmlFor="email">
                <input required type="email" name="_replyto" className="emailBox" />
              </label>
            </div>

            <div>
              <label htmlFor="message">
                <p className='text'>Your message: </p>
                <textarea required name="message" className="messageBox"></textarea>
              </label>
            </div>
            <br />
            <button type="submit">Send</button>
          </form>
        </section>
      </div>

    <div>
      <section className="factsCont">
          <h2>Random Carina Fact Generator</h2>
        <form onSubmit={onClick}>
          <p className='text'>{currentFact}</p>
          <button type="submit">New Fact</button>
        </form>
      </section>
      </div>
    </main>
  );
};

export default Contact;
