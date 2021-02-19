import React from "react"
import { Container } from "react-bootstrap"

import infocusImage from "../../images/infocus_sample.png"

const Infocus = () => {
    return (
        <section id="infocus">
            <Container className="project-page">
                <div className="project-title">
                    <h5>Completed</h5>
                    <h2>IN FOCUS Symptom Tracker</h2>
                    <h4>A website for recording and monitoring symptoms of CIPN</h4>
                </div>
                <div className="project-image">
                    <img className="image-fit" src={infocusImage} alt="" />
                </div>
                <div className="project-description">

                
                <p>Chemotherapy-induced peripheral neuropathy (CIPN) is a medical condition resulting as a side effect of exposure to the chemotherapy treatment that is common to treat various forms of cancer. The condition affects nerves, leading to pain, weakness of muscles and numbness or loss of senses of touch. Unfortunately as of yet, there is no treatment of the condition itself, however, it is possible to help reduce the impact symptoms have on patients lives if those symptoms are properly identified and tracked. The overall purpose of the project was to create a platform which enables patients undergoing chemotherapy to track CIPN symptoms and visualise them over time while allowing the sharing of data with their doctor and researchers.</p>

                <p>This project has been undertaken on behalf of the Brain and Mind Centre at the University of Sydney - researchers at the centre are already researching and helping CIPN patients. At present, tracking symptoms is a paper based process - patients are required to fill out a multitude of paper questionnaires each with a different format. Furthermore, keeping track of data gathered in this way is cumbersome, and the patient has little ability to see the changes in their own symptoms. This project has focused on the following to improve this process:</p>
                <ul>
                    <li>Give patients the power to track their own symptoms when they experience them</li>
                    <li>Provide a tool for visualising the severity of symptoms over time</li>
                    <li>Allow researchers to engage patients in research studies remotely, providing them with digital questionnaires to complete at home on a regular basis</li>
                    <li>Facilitate exporting patient data by researchers, and by the patient themselves for sharing with their doctor</li>
                </ul>

                <p>Provide all of the above via an online portal which serves both patients and researchers, and is available on desktop and mobile platforms</p>

                <p>Key stakeholders of the project include our client Susanna Park and the Brain and Mind Centre, patients undergoing chemotherapy or suffering from CIPN, researchers, and doctors of patients. Firstly, we have interacted constantly with our client through weekly client meetings where she has given us direction, and we ensured we were meeting all of the clients requirements and expectations. Our client is also a CIPN researcher and therefore is primarily interested in the value this will provide for them in conducting research and collecting patient data. For patients, they are interested in the end result and will enjoy the benefit of a more streamlined system. They interact with researchers at present by engaging in research studies, and engage with their doctors. These doctors are the final stakeholder group - tracking their patients symptoms manually at present, they will appreciate being able to view a summary of a patients exported data.</p>

                <p>With regards to deployment - our client is unable to progress with a full deployment as at the end of semester as, following our project completion, the final system must go through a rigorous ethics approval process before it can be properly deployed. Because of this, we have prepared a deployment recommendation which is summarised below in discussing resources.</p>

                <p>Key resources involve our team members and the effort each of them will put into the project, as well as Susanna Park as both the client and source of knowledge about CIPN. Amazon Web Services (AWS) is expected to be another key resource with the product deployment recommended to be on the AWS cloud platform; key AWS resources include AWS EC2 compute and RDS database services - most notably we have recommended for our client to deploy using AWS Lightsail. One negative risk is that the product does not meet strict patient data privacy requirements which would lead to an inoperable product. This risk has be mitigated however through extensive research and a security and privacy focus throughout development and deployment. The second risk identified was that the final product would not be fit for deployment on AWS which would lead to significant extra work. To mitigate this, work has be done at each stage of development to ensure the service is designed with deployment in mind - part of this work included test-deployments on AWS Beanstalk.</p>

                </div>

            </Container>

        </section>
    )
}

export default Infocus