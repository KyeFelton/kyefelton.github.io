import React, { useEffect } from "react"
import { Container, Button } from "react-bootstrap"
import { motion } from "framer-motion"

import YouTube from "react-youtube"

const Quarantinder = (props) => {

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    const _onReady = (event) => {
        event.target.pauseVideo();
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section id="quarantinder"><motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Container className="project-page">
                <div className="project-title">
                    <h5>Completed <span>&#8226;</span> 2020</h5>
                    <h2>Quarantinder</h2>
                    <h4>A website for couples to meet online whilst in quarantine</h4>
                </div>
                <div className="project-video">
                    <YouTube videoId="3bilCTwv8tc" opts={opts} onReady={_onReady} />
                </div>
                <div className="project-description">
                    <p>
                        Quarantinder is an online dating platform that allows users to match with other users on the web app and set up virtual dates. It gives users all the tools they need to meet other people online and go on dates without having to physically meet. This allows users to continue to be social and interact with others despite being in the middle of a lockdown.</p>
                    <p>The website was the product of a major group assessment for ELEC5619: Object Orientated Application Frameworks. I was allocated to a team of six and was required to build a website with my team that utilises the Spring framework. Thus Quarantinder was born. I contributed the following to the project:
                        </p>
                    <ul>
                        <li>Implemented the back-end logic and front-end design for matching, including recommended match algorithms based on location and similar interests, as well as sending. receving, accepting and declining match requests. </li>
                        <li>Implemented the back-end logic and front-end design for blocking and reporting users.</li>
                        <li>Unit tests for the features I implemented.</li>
                    </ul>
                </div>

                <div className="row-center">
                    <Button className="btn-special" onClick={() => props.history.goBack()}>Back to home</Button>
                </div>

            </Container>
        </motion.div>
        </section>
    )
}

export default Quarantinder