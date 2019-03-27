import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import HikersWatch1 from "../../screenshots/HikersWatch1.png";
import HikersWatch2 from "../../screenshots/HikersWatch2.png";
import HikersWatch3 from "../../screenshots/HikersWatch3.png";


class HikersWatch extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div style={{marginLeft:'150px'}}>
                <Carousel width="300px">
                    <div>
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={HikersWatch1} alt="Connect 3 img 1"/>
                    </div>
                    <div>
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={HikersWatch2} alt="Connect 3 img 2"/>
                    </div>
                    <div>
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={HikersWatch3} alt="Connect 3 img 2"/>
                    </div>
                </Carousel>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="project-item">
              <h2 style={{display: "inline-block", paddingRight: "10px"}}>Hiker's Watch</h2> 
                    <a class="github-button" 
                      href="https://github.com/elihabash23/HikersWatch" 
                      data-icon="octicon-star" 
                      aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                <h4> Developer / Tester </h4>
                <div className="project-description">
                  <p>
                  An Android application that displays the users latitude, longitude, 
                  accuracy, altitude, and address of their location.
                  </p>
                </div>
                <div className="project-technologies">
                  <ul className="skills">
                    <li>Android Studio</li>
                    <li>Java</li>
                    <li>Location</li>
                    <li>XML</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default HikersWatch;