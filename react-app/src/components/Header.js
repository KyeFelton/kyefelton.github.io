import React, { useState } from "react"
import { Container } from "react-bootstrap"

import SideNav from "./SideNav"
import TopNav from "./TopNav"

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
                    <TopNav />
                    <SideNav />
                </Container>
            </div>
        </header>
    )
}

export default Header
