import React from "react"
import background from "./bg.jpg"

function Banner() {

    return (
        <section className="banner">
            <img
                className="banner-background"
                src={background}
                alt="background"
            />
            <h3>Kye Felton</h3>
            <p>A software engineer + commerce student.</p>
        </section>
    )
}

export default Banner