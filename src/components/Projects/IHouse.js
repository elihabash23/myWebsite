import React, { Component } from "react";
import GIATimesheetscreenShot from "../../screenshots/GIA-Timesheet.png";

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
                  src={GIATimesheetscreenShot}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="project-item">
                <h2>IHouse App</h2>
                <h4> Full Stack Developer </h4>
                <div className="project-description">
                  <p>
                    Developed a web application for the International House of
                    San Jose State University with a team of 3 other students.
                  </p>
                  <p>
                    Used HTML, CSS, JavaScript, and the React.js library to
                    build the timesheet webpage that would allow the I-House
                    staff to efficiently log and assign residents to jobs for
                    the I-House.
                  </p>
                  <p>
                    Used the Redux library to manage the application state which
                    effectively helped I-House staff members go through existing
                    timesheets.
                  </p>
                  <p>
                    Used Node.js, Express.js and JavaScript to build the
                    back-end APIs for the timesheets and used MongoDB and
                    Mongoose for building the timesheets models and extracting
                    data from the database.
                  </p>
                  <p>
                    This project has helped the I-House efficiently and
                    effectively schedule and log their residents for specific
                    jobs they assign them to do.
                  </p>
                </div>
                <div className="project-technologies">
                  <ul className="skills">
                    <li>CSS</li>
                    <li>Express.js</li>
                    <li>HTML</li>
                    <li>Javascript</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                  </ul>
                  <ul className="skills">
                    <li>Node.js</li>
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
