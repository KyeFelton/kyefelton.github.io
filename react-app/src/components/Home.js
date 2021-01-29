import React, { useEffect, useState } from "react"

import portrait from "../images/portrait.jpg"

const Home = () => {

    const [offsetY, setOffsetY] = useState(0)
    const handleScroll =() => setOffsetY(window.pageYOffset)
  
    // const fadeOut = {
    //     opacity: 0.5;
    //     textShadow: 0 0 ${offsetY / 100}px #000
    // }

    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
  
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="banner" id="home">
            <div className="banner-container">
                <img src={portrait} alt="" style={{ transform: `translateY(${offsetY * 0.4}px)` }}/>
                <div className="title" style={{ filter: `blur(${offsetY / 100}px)` }}>
                    <span className="highlight">
                        Hi,
                    </span>
                    <span>
                        I'm Kye.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Home