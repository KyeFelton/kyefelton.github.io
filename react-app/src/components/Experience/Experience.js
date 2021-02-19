import React from "react"

import { Container } from "react-bootstrap"

import Event from "./Event"

import studyImage from "../images/study.svg"
import mobileImage from "../images/mobile.svg"
import consultImage from "../images/consult.svg"
import teachImage from "../images/teach.svg"
import splash from "../images/splash2.svg"

const educationData = [
    {
        id: 1,
        image: studyImage,
        title: 'B Software Engineering & B Commerce',
        subTitle: 'University of Sydney | 2016 - Present',
        description: [
            'Awarded High Distinction for client-focused capstone project',
            'Consistently attained Distinction results across all semesters',
            'Partook in the university\'s Graduate Edge program',
        ]
    },
]

const careerData = [
    {
        id: 2,
        image: mobileImage,
        title: 'Sales Consultant',
        subTitle: 'Optus | Oct 2020 - Present',
        description: [
            'Worked towards KPIs to meet company objectives',
            'Provided innovative solutions based on customer\'s needs and objectives',
            'Developed weekly action plans to improve performance',
        ]
    },
    {
        id: 3,
        image: consultImage,
        title: 'Information Technology Intern',
        subTitle: 'IBM | Feb 2019 - Mar 2020',
        description: [
            'Consulted with 500+ stakeholders to resolve hardware/software issues',
            'Automated inventory tracking to reduce processing times by 80%',
            'Inducted 50+ new employees to the company',
            'Created technical documents relating to software procedures',
            'Placed in Top 3 at IBM\'s Ignite public speaking competition',
        ]
    },
    {
        id: 4,
        image: teachImage,
        title: 'Mathematics & Science Tutor',
        subTitle: 'JAC | Jun 2017 - Mar 2020',
        description: [
            'Facilitated classes of 4-10 high school students',
            'Developed learning materials',
            'Provided 1-to-1 coaching',
        ]
    },
]

const Experience = () => {
    const education = educationData.map(event => <Event image={event.image} title={event.title} subTitle={event.subTitle} description={event.description} id={event.id} />)
    const career = careerData.map(event => <Event image={event.image} title={event.title} subTitle={event.subTitle} description={event.description} id={event.id} />)
    return (
        <section id="experience">
            <div className="background">
                <img className="splash left" src={ splash } alt="" />
            </div>
            <Container className="mt-5">
            <h2 className="mb-5">Education</h2>
            { education }
            <h2 className="mb-5">Career</h2>
            { career }
            </Container>
        </section>
    )
}

export default Experience