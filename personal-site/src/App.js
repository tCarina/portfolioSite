import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/aboutMe"></Route>

        <Route path="/projects"></Route>

        <Route path="/contactMe"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
