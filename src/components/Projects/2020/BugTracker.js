import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import imageNotFound from '../../../screenshots/imageNotFound.png';

class BugTracker extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Carousel >
							<div>
                  		<img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={imageNotFound} alt="BugTracker img 1"/>
                  	</div>
					</Carousel>
            </div>

            <div className="col-lg-6">
              <div className="project-item">
                <h2 style={{display: "inline-block", paddingRight: "10px"}}>BugTracker &#40;Still in the works...&#41;</h2> 
                    <a class="github-button" 
                      href="https://github.com/elihabash23/BugTracker" 
                      data-icon="octicon-star" 
                      aria-label="Star ntkme/github-buttons on GitHub">Star</a>
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
                  	<li>Cloud Computing</li>
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
