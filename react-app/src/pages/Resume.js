import React from "react"

import Banner from "../components/Banner/Banner"
import Spotlight from "../components/Spotlight/Spotlight"


import portrait from "../images/portrait.jpg"

const Resume = () => {
    return (
        // <Spotlight
        // img={portrait}
        // title="Resume"
        // description="Description"
        // />
        <div class="resume">
            <Banner img={portrait} />
            <About />
        </div>
    )
}

export default Resume