import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/IMG_5082.png';
import mock08 from '../assets/images/IMG_1567.png';
import mock09 from '../assets/images/GoTravel.png';
import mock10 from '../assets/images/FitSave.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
        <div className="project">
    <a href="https://github.com/rohansethi1999430/FitSave-React-Native" target="_blank" rel="noreferrer">
        <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
    </a>
    <a href="https://github.com/rohansethi1999430/FitSave-React-Native" target="_blank" rel="noreferrer">
        <h2>FitSave Fitness Mobile App</h2>
    </a>
    <p>
        <ul>
            <li>Developed the FitSave fitness application to consolidate gym membership prices from three different websites using advanced web crawling techniques.</li>
            <li>Built with <strong>React Native</strong> for a seamless cross-platform experience.</li>
            <li>Utilizes <strong>Java</strong> and <strong>Spring Boot</strong> on the backend to handle data processing.</li>
            <li>Leveraged <strong>JSoup</strong> and <strong>Selenium</strong> to efficiently scrape and parse data.</li>
            <li>Achieved performance improvements of up to 30% through the use of <strong>Tries</strong> for inverted indexing and <strong>Priority Queues</strong> for delivering ranked results.</li>
        </ul>
    </p>
    <p><strong>Technologies Used:</strong> React Native, Java, Spring Boot, JSoup, Selenium, Tries, Priority Queues</p>
</div>
<div className="project">
    <a href="https://github.com/rohansethi1999430/Go-Travel-React-Native" target="_blank" rel="noreferrer">
        <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
    </a>
    <a href="https://github.com/rohansethi1999430/Go-Travel-React-Native" target="_blank" rel="noreferrer">
        <h2>Go Travel France</h2>
    </a>
    <p>
        <ul>
            <li>Created a mobile app using Software Engineering concepts and received the Best Presenter Award at the University of Windsor’s 10th CS Demo Day.</li>
            <li>Generated a cross-device mobile app using <strong>React Native</strong> with a <strong>Node.js</strong> and <strong>Express</strong> backend, supported by <strong>MongoDB</strong>.</li>
            <li>Successfully launched the app on the <strong>Expo</strong> app store, ensuring wide accessibility and user reach.</li>
        </ul>
    </p>
    <p><strong>Technologies Used:</strong> React Native, JavaScript, MongoDB, Node.js, Express, Postman, Expo</p>
</div>
<div className="project">
    <a href="https://github.com/rohansethi1999430/Optimal_Price_Backend" target="_blank" rel="noreferrer">
        <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
    </a>
    <a href="https://github.com/rohansethi1999430/Optimal_Price_Backend" target="_blank" rel="noreferrer">
        <h2>Optimum Price Analysis for Sellers</h2>
    </a>
    <p>
        <ul>
            <li>Introduced a web solution for vendors to set optimal prices by analyzing market trends using Amazon's 2.1 million products dataset and built with <strong>Angular</strong> and <strong>Python</strong>.</li>
            <li>Optimized the pricing model by implementing <strong>Ridge Regression</strong> (90% accuracy), enhancing accuracy over Linear Regression.</li>
            <li>Built and deployed <strong>REST APIs</strong> for real-time price recommendations, reducing pricing errors by 30% and increasing profitability.</li>
        </ul>
    </p>
    <p><strong>Technologies Used:</strong> Angular, Python, Ridge Regression, REST APIs, Machine Learning</p>
</div>
<div className="project">
<a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
<a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Automatic Short Answer Grading</h2></a>
<p>Developed a grading system using the Universal Sentence Encoder for automated evaluation of short answers. Presented at the ICL2022 conference in Vienna, showcasing the potential for educational enhancements through AI.</p>
    </div>
            {/* <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>WeManage: Real Estate Asset Management</h2></a>
                <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;