import React from "react"
import { NavHashLink as Link } from "react-router-hash-link"

const TopNav = () => {
    return (<>
        <div id="nav" className="top-nav">
            <Link smooth to="#projects" className="nav-link" activeClassName="nav-active">Portfolio</Link>
            <Link smooth to="#home" className="nav-link" activeClassName="nav-active">About</Link>
            <Link smooth to="#contact" className="nav-link" activeClassName="nav-active">Contact</Link>
        </div>
    </>)
}

export default TopNav