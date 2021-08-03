import React from "react"
import { Container, Button } from "react-bootstrap"
import { motion } from "framer-motion"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

import speechcraftImage from "../../images/toastmasters.png"

const Speechcraft = (props) => {

    return (
        <section id="speechcraft"><motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Container className="project-page">
                <div className="project-title">
                    <h5>Completed <span>&#8226;</span> 2020</h5>
                    <h2>Speechcraft</h2>
                    <h4>A public speaking course hosted by Toastmasers</h4>
                </div>
                <div className="project-image">
                    <LazyLoadImage effect="blur" className="image-discrete-size" src={speechcraftImage} alt="" />
                </div>
                <div className="project-description">
                    <p>As Vice President of Public Relations (VPPR) for <a href="https://www.facebook.com/EttalongToastmasters">Ettalong Beach Toastmasters Club</a>, I helped the club organise a 4-week education program on public speaking. The purpose of the program was to raise awareness of toastmasters within the community and increase club membership. To achieve this goal, the program was desgined to demonstrate how Toastmasters has helped past members gain the confidence and skills to present engaging presentations, and hence encourage novice speakers to follow in their steps and sign up. Accordingly, the course was structured to allow participants to prepare a speech on their own accord, practice presenting it in front of the club, receive feedback, and then observe the techniques more experienced speakers utilise to drive rapport with their audience.</p>
                    <p>I contributed to the program by raising awareness of the campaign through posts on social media and the club website, creating and distributing flyers, collaborating in executive club meetings, and providing constructive feedback to participants on their presentation. As a result of the program, eight new members were inducted to the club (an incredible result for a small club of only 18 members).
                </p>
                </div>
                <div className="row-center">
                    <Button className="btn-special" onClick={() => props.history.goBack()}>Back to home</Button>
                </div>
            </Container>
        </motion.div>
        </section>
    )
}

export default Speechcraft