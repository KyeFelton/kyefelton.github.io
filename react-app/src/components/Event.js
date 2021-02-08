import React from "react"

import { Col, Row } from "react-bootstrap"

const Event = (props) => {

    const description = props.description.map(item => <li>{item}</li>)

    return (
        <Row className="highlight mt-5"> 
        <Col md={props.id % 2 == 0 ? { order: 1 } : { order: 2 }} lg={props.id % 2 == 0 ? { span: 5, order: 1 } : { span: 5, order: 2 }} className="highlight-col">
        <img className="mb-4" src= { props.image } alt="" />
        </Col>
        <Col md={props.id % 2 == 0 ? { order: 2 } : { order: 1 }} lg={props.id % 2 == 0 ? { span: 7, order: 2 } : { span: 7, order: 1 }} className="highlight-col">
        <h2>{ props.title }</h2>
        <h3>{ props.subTitle }</h3>
        <ul>{ description }</ul>
        </Col>
        </Row>
    )
}

export default Event