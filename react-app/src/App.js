import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {


  return (

    //to do - remove bootstrap dependency

    <Router>

      <Switch>
        <Route exact path="/resume/home" component={Home} />
        <Route exact path="/resume/projects" component={Projects} />
        {/* <Route exact path="/resume/experience" component={Experience} />
        <Route exact path="/resume/contact" component={Contact} /> */}
      </Switch>

      <Header />
      <Home />
      {/* <Experience /> */}
      <Projects />
      {/* <Contact /> */}

    </Router>
  );
}

export default App;
