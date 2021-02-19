import React from "react"
import { Container, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"

import speechcraftImage from "../../images/speechcraft.png"

const Speechcraft = () => {
    return (
        <section id="speechcraft">
            <Container className="project-page">
                <div className="project-title">
                    <h5>Completed <span>&#8226;</span> 2020</h5>
                    <h2>Speechcraft</h2>
                    <h4>A public speaking course hosted by Toastmasers</h4>
                </div>
                <div className="project-image">
                    <img className="image-fit" src={speechcraftImage} alt="" />
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

export default Speechcraft