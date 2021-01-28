import React from "react"

import Banner from "../components/Banner/Banner"

import portrait from "../images/portrait.jpg"

const title1 = 'Hi, '
const title2 = 'I\'m Kye'

const education = [
    {
        school: 'University of Sydney',
        degree: 'Bachelor of Software Engineering & Bachelor of Commerce',
        period: '2016 - Present'
    },
    {
        school: 'Kincumber High School',
        degree: 'High School Certificate',
        period: '2010 - 2015'
    },
]

const experience = [
    {
        role: 'Sales Consultant',
        organisation: 'Optus',
        period: 'Oct 2020 - Present',
        achievements: [ 
            'Worked towards KPIs to meet company objectives', 
            'Provided innovative solutions based on customer\'s needs and objectives',
            'Developed weekly action plans to improve performance',
        ]
    },
    {
        role: 'Information Technology Intern',
        organisation: 'IBM',
        period: 'Feb 2019 - Mar 2020',
        achievements: [ 
            'Consulted with 500+ stakeholders to resolve hardware/software issues', 
            'Automated inventory tracking to reduce processing times by 80%',
            'Inducted 50+ new employees to the company',
            'Created technical documents relating to software procedures',
            'Placed in Top 3 at IBM\'s Ignite public speaking competition',
        ]
    },
    {
        role: 'Mathematics & Science Tutor',
        organisation: 'JAC',
        period: 'Jun 2017 - Mar 2020',
        achievements: [ 
            'Facilitated classes of 4-10 high school students', 
            'Developed learning materials',
            'Provided 1-to-1 coaching',
        ]
    },
]

const Home = () => {
    return (
        <div class="cover" id="home">
            <Banner 
                img={portrait} 
                titleHighlight={title1}
                titleStandard={title2}
            />
            {/* Home
            About
            Projects
            Experience
            Contact */}
            
            
        </div>
    )
}

export default Home