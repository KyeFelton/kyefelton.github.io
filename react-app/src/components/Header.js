import React, { useState } from "react"
import { Container } from "react-bootstrap"
import { NavHashLink as Link } from "react-router-hash-link"

function Header() {

    const [hasScrolled, setScrolled] = useState(true)

    const toggleHasScrolled = () => {
        if (window.scrollY < 2) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }
    window.addEventListener('scroll', toggleHasScrolled)

    return (
        <header id="header">
            <div className={hasScrolled ? "navbar" : "navbar navbar-alt"}>
                <Container>
                    <div className="logo">Kye</div>
                    <div id="nav" className="top-nav">
                        <Link smooth to="#home" className="nav-link" activeClassName="nav-active">About</Link>
                        <Link smooth to="#projects" className="nav-link" activeClassName="nav-active">Projects</Link>
                        <a href="https://www.linkedin.com/in/kye-felton/" className="nav-link" activeClassName="nav-active">Contact</a>
                    </div>
                </Container>
            </div>
        </header>
    )
}

export default Header