import React, { useState } from "react"
import { Col } from "react-bootstrap"

const ProjectCard = (props) => {

    return (
        <Col sm="6" lg="4">
            <div className="project-card">
                <img src={props.image} alt="" />
                <div className="card-caption">
                    <h4>{props.name}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard