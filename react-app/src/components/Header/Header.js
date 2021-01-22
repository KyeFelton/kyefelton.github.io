import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header id="header">
            <Navbar>
                <Navbar.Brand>
                    <span className="logo"></span>
                    <span className="title"><strong>Kye Felton</strong> | Software Engineer</span>
                </Navbar.Brand>
                <Container>
                    <Nav>
                        <Nav.Item>
                            <NavLink exact to="/resume" className="nav-link" activeClassName="nav-active">About me</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/resume/experience" className="nav-link" activeClassName="nav-active">Experience</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/resume/projects" className="nav-link" activeClassName="nav-active">Projects</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/resume/strengths" className="nav-link" activeClassName="nav-active">Strengths</NavLink>
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
