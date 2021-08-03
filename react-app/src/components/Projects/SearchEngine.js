import React from "react"
import { Container, Button } from "react-bootstrap"
import { motion } from "framer-motion"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

import searchImage from "../../images/search.png"

const SearchEngine = (props) => {

    return (
        <section id="search-engine"><motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Container className="project-page">
                <div className="project-title">
                    <h5>In progress</h5>
                    <h2>USYD Search Engine</h2>
                    <h4>Creating and testing a semantic search engine for the University of Sydney</h4>
                </div>
                <div className="project-image">
                <LazyLoadImage effect="blur" className="image-discrete-size" src={searchImage} alt="" />
                </div>
                <div className="project-description">
                    <p>For my honours project, I am collaborating with the University of Sydney to develop an ontology-driven, semantic search engine. The final product will be incorporated into the university's feature website. This project will involve the following:</p>

                    <ul>
                        <li>A comprehensive review of the relevant literature including previous research on academic search engines</li>
                        <li>Developing and validating an ontology</li>
                        <li>Knowledge graphs</li>
                        <li>Developing and testing a semantic search engine for the University</li>
                        <li>Experimental evaluation</li>
                        <li>Lessons learned, conclusions</li>
                    </ul>

                    <p>The project is currently on-going and is expected to be completed by November 2021. More details will be posted upon its completion.</p>
                </div>

                <div className="row-center">
                    <Button className="btn-special" onClick={() => props.history.goBack()}>Back to home</Button>
                </div>

            </Container>
        </motion.div>
        </section>
    )
}

export default SearchEngine