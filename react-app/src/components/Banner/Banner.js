import React from "react"

const Banner = (props) => (
    <div className="banner">
        <div className="banner-container">
            <img src={props.img} alt="" />
            <div className="title">
                <span className="highlight">
                    {props.titleHighlight}
                </span>
                <span>
                    {props.titleStandard}
                </span>
            </div>
        </div>
    </div>
)

export default Banner