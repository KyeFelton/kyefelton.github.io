import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Home from './components/Home'
import Infocus from './components/Projects/Infocus'

function App() {


  return (

    //to do - remove bootstrap dependency

    <Router>
      <Route exact path="/resume/infocus" component={Infocus} />
      <Route exact path="/resume/home" component={Home} />
    </Router>
  );
}

export default App;
