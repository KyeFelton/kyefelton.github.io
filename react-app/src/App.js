import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Home from './components/Home'
import Azgaar from './components/Projects/Azgaar'
import SearchEngine from './components/Projects/SearchEngine'
import Infocus from './components/Projects/Infocus'
import Quarantinder from './components/Projects/Quarantinder'
import Speechcraft from './components/Projects/Speechcraft'


function App() {


  return (

    //to do - remove bootstrap dependency

    <Router>
      <Switch>
        <Route exact path="/resume/home" component={Home} />
        <Route exact path="/resume/azgaar" component={Azgaar} />
        <Route exact path="/resume/search-engine" component={SearchEngine} />
        <Route exact path="/resume/infocus" component={Infocus} />
        <Route exact path="/resume/quarantinder" component={Quarantinder} />
        <Route exact path="/resume/speechcraft" component={Speechcraft} />
        <Route path="/" component={Home} />
      </Switch>

≈    </Router>
  );
}

export default App;
