import React, { Component } from "react";
//import GIATimesheetscreenShot from "../../screenshots/GIA-Timesheet.png";
import MyCarousel from "../MyCarousel";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <MyCarousel />
            </div>

            <div className="col-lg-6">
              <div className="project-item">
                <h2 style={{display: "inline-block", paddingRight: "10px"}}>IHouse App</h2> 
                    <a class="github-button" 
                      href="https://github.com/rajmakda/Senior-Design-Project" 
                      data-icon="octicon-star" 
                      aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                <h4> Full Stack Developer </h4>
                <div className="project-description">
                  <p>
										A social networking site that students can use to connect with other students, 
										display their skills and experience, and create posts.
                  </p>
                  <p>
										Front end work consists off developing reusable components with 
										React.js for the UI, using the Redux library to manage 
										application state with reducers and actions, and utilizing Axios 
										for handling HTTP requests.
                  </p>
                  <p>
										Back end work consists of developing models for a post, profile, 
										and user with MongoDB and writing the schemas using Mongoose; 
										implementing HTTP APIs for posts, profiles, and users; utilizing 
										Passport.js for authentication, all done using the Express framework for Node.js.
                  </p>
                  <p>
										Project is meant to be a combination of a social media site and 
										networking site, allowing students to show off their skills, 
										education, and experience while also having the ability to 
										socialize with other users all in one place.
                  </p>
                </div>
                <div className="project-technologies">
                  <ul className="skills">
										<li>Axios</li>
                    <li>CSS</li>
                    <li>Express.js</li>
                    <li>HTML</li>
                    <li>Javascript</li>
                    <li>MongoDB</li>
                  </ul>
                  <ul className="skills">
										<li>Mongoose</li>
                    <li>Node.js</li>
										<li>Passport.js</li>
                    <li>React.js</li>
                    <li>Redux</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Projects;
