import React, { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Typewriter from "typewriter-effect"

import splash from "../images/splash1b.svg"
import zoom from "../images/zoom2.svg"

const Home = () => {

    // const [offsetY, setOffsetY] = useState(0)
    // const handleScroll =() => setOffsetY(window.pageYOffset)

    // // const fadeOut = {
    // //     opacity: 0.5;
    // //     textShadow: 0 0 ${offsetY / 100}px #000
    // // }

    // useEffect(() => {
    //   window.addEventListener('scroll', handleScroll)

    //   return () => window.removeEventListener("scroll", handleScroll)
    // }, [])

    return (
        <section id="home">
            <div className="intro">
                <Container className="intro-inner">
                            <h1><Typewriter onInit={(typewriter) => { typewriter.typeString("Hi, I'm Kye.").start() }} /></h1>
                            <h3 className="mb-3">A software engineer.</h3>
                            <p className="mb-3">I'm a student based in Sydney with hands-on experience in web development and technical consulting. I enjoy building applications that are both fun and practical. You'll find me spending my days researching frameworks, designing websites, and of course, coding. Some of the tools I've used include ReactJS, Django, Spring and Bootstrap with SASS.</p>
                         
                            <Row className="mb-5">
                                
                                <Col className="">
                                <Button className="btn-special">View my resume</Button>
                                </Col>
                                
                            </Row>
                            <Row className="row-center mb-3">
                            <img className="image-fit" src={zoom} alt="" />
                            </Row>

                </Container>
            </div>
            <div className="collage">

            </div>
        </section>
    )
}

export default Home