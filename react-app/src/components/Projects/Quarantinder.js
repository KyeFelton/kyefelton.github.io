import React from "react"
import { Container, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"

import quarantinderImage from "../../images/quarantinder.png"

const Quarantinder = () => {
    return (
        <section id="quarantinder">
            <Container className="project-page">
                <div className="project-title">
                    <h5>Completed <span>&#8226;</span> 2020</h5>
                    <h2>Quarantinder</h2>
                    <h4>A website for couples to meet online whilst in quarantine</h4>
                </div>
                <div className="project-image">
                    <img className="image-fit" src={quarantinderImage} alt="" />
                </div>
                <div className="project-description">
                Sorry, this page is empty at the moment. I'll be getting around to writing it soon.
                </div>

                <div className="row-center">
                    <NavLink to="/resume/home"><Button className="btn-special">Back to home</Button></NavLink>
                </div>

            </Container>

        </section>
    )
}

export default Quarantinder