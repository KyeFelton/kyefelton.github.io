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
                    <p>As a fun spare time activity, I've been developing my own spin-off version of the popular role-playing game series Dungeons&amp;Dragons. To enhance the playing experience, I'm building a website that both both GMs and players can utilise. The website will include the following features:</p>
                    <ul>
                        <li>A character generation and management page for players to view and edit their character's skills, items and abilities.</li>
                        <li>A game management page for the GM to take notes, track player progress and streamline particular activities such as combat.</li>
                        <li>An encyclopedia of animals, plants, locations and NPCs within the world.</li>
                    </ul>

                    <p>The project is currently on-going and is expected to be completed by February 2022. More details will be posted upon its completion.</p>
                </div>

                <div className="row-center">
                    <NavLink to="/resume#azgaar"><Button className="btn-special">Back to home</Button></NavLink>
                </div>

            </Container>

        </section>
    )
}

export default Azgaar