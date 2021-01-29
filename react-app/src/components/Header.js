import React, { useState } from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { NavHashLink as Link } from "react-router-hash-link"

import logo from "../images/me.jpg"

function Header() {

    const [navbar,setNavbar] = useState(true) 
    
    const changeBackground = () => {
        if (window.scrollY < 2) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)


    return (
        <header id="header">
            <Navbar className={ navbar ? "" : "navbar-alt"}>
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
                            <Link smooth to="#home" className="nav-link" activeClassName="nav-active">Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link smooth to="#bio" className="nav-link" activeClassName="nav-active">Bio</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link smooth to="#projects" className="nav-link" activeClassName="nav-active">Projects</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link smooth to="#experience" className="nav-link" activeClassName="nav-active">Experience</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link smooth to="#contact" className="nav-link" activeClassName="nav-active">Contact</Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
