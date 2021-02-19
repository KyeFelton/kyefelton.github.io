import React from "react"
import { Container, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"

import searchImage from "../../images/search.png"

const SearchEngine = () => {
    return (
        <section id="search-engine">
            <Container className="project-page">
                <div className="project-title">
                    <h5>In progress</h5>
                    <h2>SearchEngine</h2>
                    <h4>Creating and testing a semantic search engine for the University of Sydney</h4>
                </div>
                <div className="project-image">
                    <img className="image-fit" src={searchImage} alt="" />
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

export default SearchEngine