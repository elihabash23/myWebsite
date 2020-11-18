import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import imageNotFound from '../../../screenshots/imageNotFound.png';
import BugTracker1 from '../../../screenshots/BugTracker1.png';
import BugTracker2 from '../../../screenshots/BugTracker2.png';
import BugTracker3 from '../../../screenshots/BugTracker3.png';
class BugTracker extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Carousel >
							    <div>
                  		<img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={BugTracker1} alt="BugTracker img 1"/>
                  </div>
                  <div>
                  		<img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={BugTracker2} alt="BugTracker img 2"/>
                  </div>
                  <div>
                  		<img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={BugTracker3} alt="BugTracker img 3"/>
                  </div>
					    </Carousel>
            </div>

            <div className="col-lg-6">
              <div className="project-item">
                <h2 style={{display: "inline-block", paddingRight: "10px"}}>BugTracker</h2> 
                    <a class="github-button" 
                      href="https://github.com/elihabash23/BugTracker" 
                      data-icon="octicon-star" 
                      aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                      <a style={{marginLeft: "10px"}}
											 class="btn btn-primary"
											 href="https://dl4du9vgcwadb.cloudfront.net/"
											 target="_blank"
                       rel="noopener noreferrer">
												Go to Website
										</a>
                <h4> Full Stack Developer </h4>
                <div className="project-description">
                  <p>
										A web application that helps teams keep track of bugs in their projects. 
                  </p>
                  <p>
										Front end technologies consisted of the JavaScript, HTML, CSS, and 
										the React.js library. Back end technologies consisted of AWS services
										&#40;DynamoDB, Cognito for Authentication, S3 hosting, and GraphQL API with Amplify&#41;
                  </p>
                </div>
                <div className="project-technologies">
                  <ul className="skills">
							<li>React</li>
                  	<li>AWS</li>
                  	<li>DynamoDB</li>
                  	<li>S3</li>
                  	<li>Cloud-Computing</li>
                  	<li>GraphQL</li>
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

export default BugTracker;
