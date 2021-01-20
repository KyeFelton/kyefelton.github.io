import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"

function Menu() {
    return (
        <div>
            <header id="header">
                <Navbar>
                    <Container>
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href="#aboutme">About me</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#experience">Experience</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#projects">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#strengths">Strengths</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#footer">Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        </div>
    )
}

export default Menu
