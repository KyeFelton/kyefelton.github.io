import React, { useState } from "react"
import { Col } from "react-bootstrap"

function ProjectCard(props) {
    const [isCaptionShown, setIsCaptionShown] = useState(false);



    return (
        <Col sm="6" lg="4">
            <div className="project-card">
                {/* <a href="" onMouse onMouseEnter={() => setIsCaptionShown(true)} onMouseLeave={() => setIsCaptionShown(false)}> */}
                <img src={props.image} alt="" />
                {/* </a>
            {isCaptionShown && ( */}
                <div className="card-caption">
                    <h4>{props.name}</h4>
                    <p>{props.description}</p>
                </div>
                {/* )} */}
            </div>
        </Col>
    )
}

export default ProjectCard