import React from "react"
import { motion, useCycle } from "framer-motion"
import { NavHashLink as Link } from "react-router-hash-link"

import NavToggle from "./NavToggle"

const SideNav = () => {
    const [isOpen, toggleOpen] = useCycle(true, false)

    // <motion.nav
    //   initial={false}
    //   animate={isOpen ? "open" : "closed"}
    //   custom={height}
    //   ref={containerRef}
    // >

    return (
    <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="nav-toggle"
    >
        <NavToggle toggle={() => toggleOpen()}/>

        {/* {(() => {
            if (!isOpen) {
                return (<div id="nav" className="side-nav">
                    <Link smooth to="#home" className="nav-link" activeClassName="nav-active">about</Link>
                    <Link smooth to="#projects" className="nav-link" activeClassName="nav-active">projects</Link>
                    <Link smooth to="#experience" className="nav-link" activeClassName="nav-active">experience</Link>
                    <Link smooth to="#contact" className="nav-link" activeClassName="nav-active">contact</Link>
                </div>)
            }
        })} */}

    </motion.nav>)
}

export default SideNav