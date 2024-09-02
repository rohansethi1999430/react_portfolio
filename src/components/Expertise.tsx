import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons'; // Import relevant icons
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React.js",
    "Vue.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Java",
    "Spring Boot",
    "Django",
    "Node.js",
    "Express.js",
];

const labelsSecond = [
    "Git",
    "GitLab CI/CD",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "GCP",
    "Heroku",
    "Jenkins",
    "Spinnaker",
];

const labelsThird = [
    "Python",
    "R",
    "Pandas",
    "Selenium",
    "OpenAI",
    "Hugging Face",
    "AWS",
    "GCP",
];

const labelsFourth = [
    "Apex",
    "Salesforce",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Full Stack Web Development</h3>
                        <p>I have developed a wide range of web applications using modern frameworks and libraries such as React.js, Vue.js, Spring Boot, and Django, with a strong proficiency in both frontend and backend development.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>DevOps & Cloud Engineering</h3>
                        <p>I have hands-on experience deploying projects to production environments and configuring CI/CD pipelines using GitLab. I also manage containerization with Docker and Kubernetes, and automate deployments on cloud platforms such as AWS, Azure, and GCP.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>AI & Machine Learning</h3>
                        <p>I integrate the latest AI and machine learning technologies into projects to enhance data-driven decision-making processes and deliver intelligent solutions.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" /> {/* Replace with a different relevant icon if available */}
                        <h3>Salesforce Development</h3>
                        <p>I have beginner-level experience with Salesforce development using Apex, focusing on creating basic custom solutions to enhance Salesforce functionality.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFourth.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;