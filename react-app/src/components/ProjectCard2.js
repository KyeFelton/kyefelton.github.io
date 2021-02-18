import React, { useState } from "react"
import { Container, Col, Row } from "react-bootstrap"
import ReactCardFlip from 'react-card-flip'

const ProjectCard2 = (props) => {

    const [isFlipped, setFlip] = useState(false)

    const handleClick = () => {
        setFlip(!isFlipped)
    }

    const style = {
        background: "linear-gradient(" + props.color1 + "," + props.color2 + ")",
        color: props.color3
    }

    return (
        <Container className="page">
            <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront="1" flipSpeedFrontToBack="1">
                <div className="project-tile" style={style} onClick={handleClick}>
                    <img src={props.image} className="focus-image" alt="" />
                    <div className="tile-caption">
                        <h5>{props.category}</h5>
                        <h4><strong>{props.name}</strong></h4>
                    </div>
                </div>

                <div className="project-tile" style={style} onClick={handleClick}>
                    <div className="tile-back">
                        <Container>
                            <Row>
                            <Col sm>
                                    <p className="description">{props.description}</p>
                                </Col>
                                <Col sm>
                                    <img src={props.backImage} alt="" />
                                </Col>
                                {/* <div className="tile-back-inner"> */}
                                
                                {/* </div> */}
                            </Row>
                        </Container>
                    </div>
                </div>
            </ReactCardFlip>
        </Container>

    )
}

export default ProjectCard2
