import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import WhatsTheWeather1 from "../../screenshots/WhatsTheWeather1.png";
import WhatsTheWeather2 from "../../screenshots/WhatsTheWeather2.png";
import WhatsTheWeather3 from "../../screenshots/WhatsTheWeather3.png";


class WhatsTheWeather extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div style={{marginLeft:'150px'}}>
                <Carousel width="300px">
                    <div>
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={WhatsTheWeather1} alt="Connect 3 img 1"/>
                    </div>
                    <div>
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={WhatsTheWeather2} alt="Connect 3 img 2"/>
                    </div>
                    <div>
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={WhatsTheWeather3} alt="Connect 3 img 2"/>
                    </div>
                </Carousel>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="project-item">
              <h2 style={{display: "inline-block", paddingRight: "10px"}}>What's The Weather</h2> 
                    <a class="github-button" 
                      href="https://github.com/elihabash23/WhatsTheWeather" 
                      data-icon="octicon-star" 
                      aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                <h4> Developer / Tester </h4>
                <div className="project-description">
                  <p>
                  An Android application that displays weather information of 
                  the city that a users inputs.
                  </p>
                </div>
                <div className="project-technologies">
                  <ul className="skills">
                    <li>Android Studio</li>
                    <li>Java</li>
                    <li>JSON</li>
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

export default WhatsTheWeather;