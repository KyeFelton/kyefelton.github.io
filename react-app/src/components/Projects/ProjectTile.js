import React from "react"
import { Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const ProjectTile = (props) => {

    const style = {
        background: "linear-gradient(" + props.color1 + "," + props.color2 + ")",
        color: props.color3
    }

    return (
        <Container className="project-tile-wrapper" id={props.link}>
            <NavLink to={"/portfolio/" + props.link }>
                <div className="project-tile" style={style}>
                    <img src={props.image} className="focus-image" alt="" />
                    <div className="tile-caption">
                        <h5>{props.category}</h5>
                        <h4><strong>{props.name}</strong></h4>
                    </div>
                </div>
            </NavLink>
        </Container>

    )
}

export default ProjectTile
