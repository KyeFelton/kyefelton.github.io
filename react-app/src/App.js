import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Bio from './pages/Bio'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'


function App() {

  return (
    // <Router>
    //   <Header />
    //     <Switch>
    //       <Route exact path="#home">
    //         <Cover />
    //       </Route>
    //     </Switch>
    //     <Switch>
    //       <Route path="#bio">
    //         <Projects />
    //       </Route>
    //     </Switch>
    //     <Switch>
    //       <Route path="/resume/">
    //         <Projects />
    //       </Route>
    //     </Switch>
    //     <Switch>
    //       <Route path="/resume/projects">
    //         <Projects />
    //       </Route>
    //     </Switch>
    // </Router>
    <Router>

      <Switch>
        <Route exact path="/resume/home" component={Home} />
        <Route exact path="/resume/bio" component={Bio} />
        <Route exact path="/resume/projects" component={Projects} />
        <Route exact path="/resume/experience" component={Experience} />
        <Route exact path="/resume/contact" component={Contact} />
      </Switch>

      <Header />
      <Home />
      <Bio />
      <Projects />
      <Experience />
      <Contact />

    </Router>
  );
}

export default App;
