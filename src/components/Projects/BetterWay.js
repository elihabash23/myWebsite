import React, { Component } from "react";
import BetterWayScreenShot from "../../screenshots/BetterWay.png";
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
                  src={BetterWayScreenShot}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="project-item">
              <h2 style={{display: "inline-block", paddingRight: "10px"}}>BetterWay</h2> 
                    <a class="github-button" 
                      href="https://github.com/lalquran/BetterWay" 
                      data-icon="octicon-star" 
                      aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                <h4> Back-end Developer / Tester </h4>
                <div className="project-description">
                  <p>
                    Developed a grocery shopping web application with a team of
                    8 other students.
                  </p>
                  <p>
                    Used Node.js, Express.js and JavaScript to build the model
                    for the shopping cart, the order, and the user. Conducted
                    unit tests for selecting items and purchases. Build multiple
                    back-end routes for shoppings items.
                  </p>
                </div>
                <div className="project-technologies">
                  <ul className="skills">
                    <li>Express.js</li>
                    <li>Javascript</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Node.js</li>
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
