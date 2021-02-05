import React, { useEffect, useState } from "react"
import Git from "../images/Git"
import { Container, Row, Col } from "react-bootstrap"

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
            <div className="banner">
                <img className="background" src={splash} alt="" /> {/* style={{ transform: `translateY(${offsetY * 0.4}px)` }} */}
                <Container className="banner-inner">
                    <Row>
                        <Col md className="banner-caption"> {/* style={{ filter: `blur(${offsetY / 100}px)` }} */}
                            <h2>Hi, I'm Kye</h2>
                            <h3>A graduate in software engineering</h3>
                            <p>My main areas of expertise are web development and technical consulting. I spend my days researching, designing, protoyping and coding.</p>
                        </Col>
                        <Col md>
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