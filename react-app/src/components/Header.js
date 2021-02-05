import React, { useState } from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { NavHashLink as Link } from "react-router-hash-link"

function Header() {

    const [navbar, setNavbar] = useState(true)

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
            <Navbar className={navbar ? "" : "navbar-alt"}>
                <Container>

                    <Navbar.Brand>
                        <div className="logo">Kye</div>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Item>
                            <Link smooth to="#home" className="nav-link" activeClassName="nav-active">about</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link smooth to="#projects" className="nav-link" activeClassName="nav-active">projects</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link smooth to="#experience" className="nav-link" activeClassName="nav-active">experience</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link smooth to="#contact" className="nav-link" activeClassName="nav-active">contact</Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
