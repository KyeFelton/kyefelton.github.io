import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Header from "./components/Header/Header"
import About from './pages/About'
import Projects from './pages/Projects'



function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/resume">
          <About />
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
