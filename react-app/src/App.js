import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Home from './components/Home'
import Azgaar from './components/projects/Azgaar'
import SearchEngine from './components/projects/SearchEngine'
import Infocus from './components/projects/Infocus'
import Quarantinder from './components/projects/Quarantinder'
import Speechcraft from './components/projects/Speechcraft'
import ScrollToTop from './components/utilities/ScrollToTop'
import { AnimatePresence } from "framer-motion"


function App() {

  return (
    <>
      {
        <Router>
          <ScrollToTop />
          <AnimatePresence>
            {/* <Route exact path="/portfolio" component={Home} key="0"/> */}
            <Route exact path="/azgaar" component={Azgaar} key="1"/>
            <Route exact path="/thesis" component={SearchEngine} key="2"/>
            <Route exact path="/infocus" component={Infocus} key="3"/>
            <Route exact path="/quarantinder" component={Quarantinder} key="4"/>
            <Route exact path="/speechcraft" component={Speechcraft} key="5"/>
            <Route exact path="/" component={Home} key="6"/>
          </AnimatePresence>
        </Router>
      }
    </>
  );
}

export default App;
