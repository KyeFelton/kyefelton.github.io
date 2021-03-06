import React from "react"
import { Container, Button } from "react-bootstrap"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { motion } from "framer-motion"

import azgaarImage from "../../images/azgaar.png"

const Azgaar = (props) => {

    return (
        <section id="azgaar">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <Container className="project-page">
                    <div className="project-title">
                        <h5>In progress</h5>
                        <h2>Azgaar</h2>
                        <h4>A website where players can create and manage their RPG characters</h4>
                    </div>
                    <div className="project-image">
                    <LazyLoadImage effect="blur" className="image-discrete-size" alt="" src={azgaarImage}/>
                    </div>
                    <div className="project-description">
                        <p>As a fun spare time activity, I've been developing my own spin-off version of the popular role-playing game series Dungeons&amp;Dragons. To enhance the playing experience, I'm building a website that both GMs and players can utilise. The website will include the following features:</p>
                        <ul>
                            <li>A character generation and management page for players to view and edit their character's skills, items and abilities.</li>
                            <li>A game management page for the GM to take notes, track player progress and streamline particular activities such as combat.</li>
                            <li>An encyclopedia of animals, plants, locations and NPCs within the world.</li>
                        </ul>
                        <p>The project is currently on-going and is expected to be completed by February 2022. More details will be posted upon its completion.</p>
                    </div>
                    <div className="row-center">
                        <Button className="btn-special" onClick={() => props.history.goBack()}>Back to home</Button>
                    </div>

                </Container>
            </motion.div>
        </section>
    )
}

export default Azgaar