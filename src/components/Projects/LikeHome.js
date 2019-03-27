import React, { Component } from "react";
import LikeHomeScreenShot from "../../screenshots/LikeHome.png";
class Projects extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="project-photo">
                <img
                  className="thumbnail img-thumbnail"
                  alt="Project 1"
                  src={LikeHomeScreenShot}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="project-item">
              <h2 style={{display: "inline-block", paddingRight: "10px"}}>LikeHome</h2> 
                    <a class="github-button" 
                      href="https://github.com/a-rich/Process-Management-Project" 
                      data-icon="octicon-star" 
                      aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                <h4> Front End Developer / Product Owner </h4>
                <div className="project-description">
                  <p>
                    Developed a hotel reservation web application with a team of
                    9 other students
                  </p>
                  <p>
                    As one of the front end developers, I used HTML, CSS,
                    JavaScript, and the React.js library to build the user
                    account page which displayed user information, account
                    information, and recent hotel reservations.
                  </p>
                  <p>
                    As the product owner, I kept constant communication with my
                    professor every week for any new features she would
                    introduce and presented her ideas to my team during our
                    scrum meetings.
                  </p>
                </div>
                <div className="project-technologies">
                  <ul className="skills">
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>Javascript</li>
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
