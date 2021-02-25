import React, { useEffect } from "react"
import { Container, Button } from "react-bootstrap"

import searchImage from "../../images/search.png"

const SearchEngine = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <section id="search-engine">
            <Container className="project-page">
                <div className="project-title">
                    <h5>In progress</h5>
                    <h2>USYD Search Engine</h2>
                    <h4>Creating and testing a semantic search engine for the University of Sydney</h4>
                </div>
                <div className="project-image">
                    <img className="image-fit" src={searchImage} alt="" />
                </div>
                <div className="project-description">
                    <p>For my honours project, I am partnering up with the University of Sydney to improve the university's search engine by developing and testing an ontology-driven semantic search engine. This project will involve the following:</p>

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

        </section>
    )
}

export default SearchEngine