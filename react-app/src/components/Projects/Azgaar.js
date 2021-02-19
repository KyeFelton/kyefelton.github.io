import React from "react"
import { Container, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"

import azgaarImage from "../../images/azgaar.png"

const Azgaar = () => {
    return (
        <section id="azgaar">
            <Container className="project-page">
                <div className="project-title">
                    <h5>In progress</h5>
                    <h2>Azgaar</h2>
                    <h4>A website where players can create and manage their RPG characters</h4>
                </div>
                <div className="project-image">
                    <img className="image-fit" src={azgaarImage} alt="" />
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

export default Azgaar