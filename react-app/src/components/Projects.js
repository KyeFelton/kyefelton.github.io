import React from "react"
import { Container, Row } from "react-bootstrap" 

import ProjectCard from "./ProjectCard"

import azgaarImage from "../images/azgaar.jpg"
import thesisImage from "../images/thesis.jpg"
import symptomImage from "../images/symptom_tracker.jpg"
import quarantinerImage from "../images/quarantinder.jpg"
import speechcraftImage from "../images/speechcraft.jpg"

import splash from "../images/splash3.svg"

const Projects = () => {

    const currentProjectData = [
        {
            key: 1,
            image: azgaarImage,
            name: "Azgaar",
            description: "A player manager website for D&D characters.",
        },
        {
            key: 2,
            image: thesisImage,
            name: "Thesis project",
            description: "More information to come...",
        }
    ]

    const completedProjectData = [
        {
            key: 1,
            image: symptomImage,
            name: "Symptom Tracker",
            description: "A website patients can use to track their symptoms for CIPN.",
        },
        {
            key: 2,
            image: quarantinerImage,
            name: "Quarantinder",
            description: "An online dating website for those in quarantine.",
        },
        {
            key: 3,
            image: speechcraftImage,
            name: "Speechcraft",
            description: "A program for beginners to practice public speaking.",
        }
    ]

    const currentProjects = currentProjectData.map(project => <ProjectCard image={project.image} name={project.name} description={project.description} />)
    const completedProjects = completedProjectData.map(project => <ProjectCard image={project.image} name={project.name} description={project.description} />)

    return (
        <section id="projects">
            {/* <div className="background">
                <img className="splash top right" src={splash} alt="" />
            </div> */}
            <Container className="mb-5 pb-5">
            <h2>Projects</h2>
            <h3>Current</h3>

            <Row>
                { currentProjects }
            </Row>
            <h3>Completed</h3>
            <Row>
                { completedProjects }
            </Row>
            </Container>
        </section>
    )
}

export default Projects