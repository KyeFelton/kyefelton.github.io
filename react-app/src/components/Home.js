import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Switch, Route } from "react-router-dom"
import Typewriter from "typewriter-effect"
import Header from './Header'


import Projects from "./Projects/ProjectList"

import zoom from "../images/zoom2.svg"

const Home = () => {

    return (
        <>
            <Switch>
                <Route exact path="/resume/projects" components={Projects} />
            </Switch>

            <Header />

            <section id="home">
                <div className="intro">
                    <Container className="intro-inner">
                        <h1><Typewriter onInit={(typewriter) => { typewriter.typeString("Hi, I'm Kye.").start() }} /></h1>
                        <h3 className="mb-3">A software engineer.</h3>
                        <p className="bottom-margin-1">I'm a student based in Sydney with hands-on experience in web development and technical consulting. I enjoy building applications that are both fun and practical. You'll find me spending my days researching frameworks, designing websites, and of course, coding. Some of the tools I've used include ReactJS, Django, Spring and Bootstrap with SASS.</p>

                        <Row className="bottom-margin-3">

                            <Col className="">
                                <Button className="btn-special" href="https://raw.githubusercontent.com/KyeFelton/resume/main/kye_felton_resume.pdf">View my resume</Button>
                            </Col>

                        </Row>
                        <Row className="row-center bottom-margin-2">
                            <img className="image-fit" src={zoom} alt="" />
                        </Row>

                    </Container>
                </div>
            </section>

            <Projects />
        </>

    )
}

export default Home