import React, { useState } from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

import logo from "../../images/me.jpg"

function Header() {

    const [navbar,setNavbar] = useState(false) 
    
    const changeBackground = () => {
        if (window.scrollY >= 5) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <header id="header">
            <Navbar className={ navbar ? "light" : ""}>
                <Navbar.Brand>
                    <div className="logo"><img src={logo} alt="" /></div>
                    <div className="title-container">
                        <div className="title">Kye Felton</div>
                        <div className="sub-title">Software Engineer</div>
                    </div>
                </Navbar.Brand>
                <Container>
                    <Nav>
                        <Nav.Item>
                            <NavLink exact to="/resume" className="nav-link" activeClassName="nav-active">Resume</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/resume/projects" className="nav-link" activeClassName="nav-active">Projects</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/resume/contact" className="nav-link" activeClassName="nav-active">Contact</NavLink>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
