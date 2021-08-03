import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Switch, Route } from "react-router-dom"
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"
import Header from './Header'

import Projects from "./projects/ProjectList"
import zoom from "../images/zoom2.svg"

const Home = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Switch>
                <Route exact path="/projects" components={Projects} />
            </Switch>
            <Header />
            <section id="home">
                <div className="intro">
                    <Container className="intro-inner">
                        <Row>
                            <Col xl>
                                <h1><Typewriter onInit={(typewriter) => { typewriter.typeString("Hi, I'm Kye.").start() }} /></h1>
                                <h3 className="mb-3">A software engineer.</h3>
                                <p className="bottom-margin-1">I'm a student based in Sydney with hands-on experience in web development and technical consulting. I enjoy building applications that are both fun and practical. You'll find me spending my days researching frameworks, designing websites, and of course, coding. Some of the tools I've used include ReactJS, Django, Spring and Bootstrap with SASS.</p>
                                <Row className="">
                                    <Col className="">
                                        <Button className="btn-special" href="https://raw.githubusercontent.com/KyeFelton/portfolio/main/kye_felton_resume.pdf">View my resume</Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl className="row-center bottom-margin-5 top-margin-3">
                                <img className="image-fit" src={zoom} alt="" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <Projects />
        </motion.div>
    )
}

export default Home