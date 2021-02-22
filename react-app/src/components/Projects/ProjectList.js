import React from "react"
import { Container, Row } from "react-bootstrap"

import ProjectTile from "./ProjectTile"

import azgaarImage from "../../images/azgaar.svg"
import thesisImage from "../../images/thesis.svg"
import symptomImage from "../../images/infocus.svg"
import quarantinerImage from "../../images/quarantinder.svg"
import speechcraftImage from "../../images/speechcraft.svg"

const Projects = () => {

    const projectData = [
        
        {
            key: 1,
            image: symptomImage,
            category: "Website",
            name: "IN FOCUS Symptom Tracker",
            link: "infocus",
            color1: "#8be298",
            color2: "#EEEEEE",
            color3: "#333",
        },
        {
            key: 2,
            image: thesisImage,
            category: "Knowledge graph",
            name: "USYD Search Engine",
            link: "thesis",
            color1: "#7Cb1fe",
            color2: "#d16868",
            color3: "#FFF",
        },
        {
            key: 3,
            image: azgaarImage,
            name: "Azgaar",
            category: "Website",
            link: "azgaar",
            color1: "#fed57c" ,
            color2: "#68d0d1",
            color3: "#333",
        },
        {
            key: 4,
            image: quarantinerImage,
            category: "Website",
            name: "Quarantinder",
            link: "quarantinder",
            color1: "#f8c6ff",
            color2: "#ffeec4",
            color3: "#333",
        },
        {
            key: 5,
            image: speechcraftImage,
            category: "Education program",
            name: "Speechcraft",
            link: "speechcraft",
            color1: "#8294ec",
            color2: "#a38B80",
            color3: "#FFF",
        }
    ]

    const projects = projectData.map(project => <ProjectTile image={project.image} name={project.name} category={project.category} link={project.link} color1={project.color1} color2={project.color2} color3={project.color3}/>)

    return (
        <section id="projects">
            <Container className="mb-5 pb-5">
                {projects}
            </Container>
        </section>
    )
}

export default Projects