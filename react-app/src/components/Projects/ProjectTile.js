import React, { useState } from "react"
import { Container, Col, Row } from "react-bootstrap"

const ProjectCard2 = (props) => {

    const style = {
        background: "linear-gradient(" + props.color1 + "," + props.color2 + ")",
        color: props.color3
    }

    return (
        <Container className="page">
            <a href="#">
                <div className="project-tile" style={style}>
                    <img src={props.image} className="focus-image" alt="" />
                    <div className="tile-caption">
                        <h5>{props.category}</h5>
                        <h4><strong>{props.name}</strong></h4>
                    </div>
                </div>
            </a>
        </Container>

    )
}

export default ProjectCard2
