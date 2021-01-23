import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Header from "./components/Header/Header"
import Resume from './pages/Resume'
import Projects from './pages/Projects'



function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </Switch>
      <Switch>
        <Route path="/resume/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
