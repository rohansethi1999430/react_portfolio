import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          {/* University of Windsor */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2024 - Apr 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Master of Applied Computing</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Windsor, Windsor, ON</h4>
            <p>
              Specialization in Computer Science with a GPA of 91/100. Involved in advanced coursework and projects focused on software engineering, machine learning, and data science.
            </p>
          </VerticalTimelineElement>

          {/* Dell Technologies */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sept 2021 - Dec 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Dell Technologies, Bengaluru, India</h4>
            <p>
              Developed and enhanced customer support microservices using Java and Spring Boot. Migrated APIs to Gradle, reducing latency and increasing throughput. Contributed to CI/CD pipeline integration using GitLab and Salesforce development with Apex.
            </p>
          </VerticalTimelineElement>

          {/* Cognizant Technology Services */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2021 - Aug 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Java Full Stack Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Cognizant Technology Services, Chennai, India</h4>
            <p>
              Implemented web applications using Django and JavaScript. Automated workflows with Selenium, and developed data pipelines with Python and AWS, improving data processing efficiency.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;