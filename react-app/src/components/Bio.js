import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"

const education = [
    {
        school: 'University of Sydney',
        degree: 'Bachelor of Software Engineering & Bachelor of Commerce',
        period: '2016 - Present'
    },
    {
        school: 'Kincumber High School',
        degree: 'High School Certificate',
        period: '2010 - 2015'
    },
]

const Bio = () => {
    return (
        <div className="white">
            <Container className="spotlight-container" id="bio">

                <Row className="spotlight">
                    <Col className="caption">
                        <p>Here is some text</p>
                    </Col>
                    <Col>
                        <img src={image1} alt="" />
                    </Col>
                </Row>

                <Row className="spotlight">
                    <Col className="caption">
                        <p>Here is some text</p>
                    </Col>
                    <Col>
                        <img src={image2} alt="" />
                    </Col>
                </Row>

            </Container>
        </div>

    )
}

export default Bio