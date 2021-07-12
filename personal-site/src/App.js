import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import AboutMe from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/aboutMe">
        <AboutMe />
        </Route>
          
        <Route path="/projects">
        <Projects />
        </Route>
          
        <Route path="/contactMe">
          <Contact />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
