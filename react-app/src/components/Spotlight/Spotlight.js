import React from "react"

const Spotlight = (props) => (
    <div className="spotlight">
        <div className="spotlight-image">
            <img src={props.img} alt="" />
        </div>
        <div className="spotlight-container">
            <div className="spotlight-card">
                <div className="spotlight-title">
                    About me
            </div>
                <div className="spotlight-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            </div>
        </div>

    </div>
)

export default Spotlight