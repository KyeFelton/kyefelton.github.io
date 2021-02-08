import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
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
            <div className="background">
                <img className="splash top right" src={splash} alt="" /> {/* style={{ transform: `translateY(${offsetY * 0.4}px)` }} */}
            </div>
            <div className="banner">
                <Container className="banner-inner">
                    <Row>
                        <Col xl className="banner-caption"> {/* style={{ filter: `blur(${offsetY / 100}px)` }} */}
                            <h1><Typewriter onInit={(typewriter) => { typewriter.typeString("Hi, I'm Kye.").start() }} /></h1>
                            <h3>A software engineer</h3>
                            <p className="mt-1 mb-5">My main areas of expertise are web development and technical consulting. I spend my days researching, designing, protoyping and coding.</p>
                            <p className="mb-5">Note: This website is a work in progress. You may notice a few odd things (e.g. inconsistent spacing, contact page is missing).</p>
                        </Col>
                        <Col xl>
                            <img src={zoom} alt="" />
                        </Col>

                    </Row>
                </Container>
            </div>
            <div className="collage">

            </div>
        </section>
    )
}

export default Home