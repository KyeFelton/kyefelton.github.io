import React from "react"

const Banner = (props) => (
    <div className="banner">
        <div className="banner-image">
            <img src={props.img} alt="" />
        </div>
        <div className="banner-container">
            <div className="banner-card">
                <div className="banner-title">
                    About me
            </div>
                <div className="banner-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            </div>
        </div>
    </div>
)

export default Banner