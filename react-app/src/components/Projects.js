import React from "react"
import { Container, Row } from "react-bootstrap"

import ProjectCard from "./ProjectCard2"

import azgaarImage from "../images/azgaar.svg"
import thesisImage from "../images/thesis.svg"
import symptomImage from "../images/infocus.svg"
import infocusImage from "../images/infocus_sample.png"
import quarantinerImage from "../images/quarantinder.svg"
import speechcraftImage from "../images/speechcraft.svg"

import splash from "../images/splash3.svg"

const Projects = () => {

    const projectData = [
        {
            key: 1,
            image: azgaarImage,
            name: "Azgaar",
            category: "Website",
            description: "A player manager website for D&D characters.",
            color1: "#fed57c" ,
            color2: "#68d0d1",
            color3: "#333",
        },
        {
            key: 2,
            image: thesisImage,
            category: "Knowledge graph",
            name: "USYD Search Engine",
            description: "More information to come...",
            color1: "#7Cb1fe",
            color2: "#d16868",
            color3: "#FFF",
        },
        {
            key: 3,
            image: symptomImage,
            backImage: infocusImage,
            category: "Website",
            name: "IN FOCUS Symptom Tracker",
            description: "A website patients can use to track their symptoms for CIPN.",
            color1: "#8be298",
            color2: "#EEEEEE",
            color3: "#333",
        },
        {
            key: 4,
            image: quarantinerImage,
            category: "Website",
            name: "Quarantinder",
            description: "An online dating website for those in quarantine.",
            color1: "#f8c6ff",
            color2: "#ffeec4",
            color3: "#333",
        },
        {
            key: 5,
            image: speechcraftImage,
            category: "Education program",
            name: "Speechcraft",
            description: "A program for beginners to practice public speaking.",
            color1: "#8294ec",
            color2: "#a38B80",
            color3: "#FFF",
        }
    ]

    const projects = projectData.map(project => <ProjectCard image={project.image} backImage={project.backImage} name={project.name} category={project.category} description={project.description} color1={project.color1} color2={project.color2} color3={project.color3}/>)

    return (
        <section id="projects">
            {/* <div className="background">
                <img className="splash top right" src={splash} alt="" />
            </div> */}
            <Container className="mb-5 pb-5">
                {projects}
            </Container>
        </section>
    )
}

export default Projects