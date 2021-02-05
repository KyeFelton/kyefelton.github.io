import React from "react"

import { Col, Row } from "react-bootstrap"

const Event = (props) => {

    return (
        <Row className="highlight"> 
        <Col sm className="highlight-col">
        <img className="highlight-image" src= {props.image} alt="" />
        </Col>
        <Col sm className="highlight-col">
        <h2>{props.title}</h2>
        <h3>{props.subTitle}</h3>
        </Col>
        </Row>
    )
}

export default Event