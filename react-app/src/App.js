import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {


  return (

    //to do - remove bootstrap dependency

    <Router>

      <Switch>
        <Route exact path="/resume/home" component={Home} />
        <Route exact path="/resume/projects" component={Projects} />
      </Switch>

      <Header />
      <Home />
      <Projects />
    </Router>
  );
}

export default App;
