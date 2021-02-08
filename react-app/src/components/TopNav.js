import React from "react"
import { NavHashLink as Link } from "react-router-hash-link"

const TopNav = () => {
    return (<>
        <div id="nav" className="top-nav">
            <Link smooth to="#home" className="nav-link" activeClassName="nav-active">about</Link>
            <Link smooth to="#experience" className="nav-link" activeClassName="nav-active">experience</Link>
            <Link smooth to="#projects" className="nav-link" activeClassName="nav-active">projects</Link>
            <Link smooth to="#contact" className="nav-link" activeClassName="nav-active">contact</Link>
        </div>
    </>)
}

export default TopNav