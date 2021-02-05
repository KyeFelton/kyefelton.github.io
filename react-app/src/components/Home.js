import React, { useEffect, useState } from "react"
import Git from "../images/Git"
import { Container, Row, Col } from "react-bootstrap"

import background from "../images/zoomsplash.svg"

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
        <div className="banner" id="home">
            <div className="banner-container">
                <img src={background} alt="" /> {/* style={{ transform: `translateY(${offsetY * 0.4}px)` }} */}
                <Container className="banner-title"> {/* style={{ filter: `blur(${offsetY / 100}px)` }} */}
                    <Row>
                        <Col xs={{span: "auto", offset: 1}}>
                            <div className="title-card title-color">
                                Hi, I'm Kye
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Home