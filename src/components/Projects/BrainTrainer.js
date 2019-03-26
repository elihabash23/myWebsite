import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import BrainTrainerimg1 from "../../screenshots/BrainTrainer1.png";
import BrainTrainerimg2 from "../../screenshots/BrainTrainer2.png";



class BrainTrainer extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div style={{marginLeft:'150px'}}>
                <Carousel width="200px">
                    <div>
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={BrainTrainerimg2} alt="Connect 3 img 1"/>
                    </div>
                    <div>
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={BrainTrainerimg1} alt="Connect 3 img 2"/>
                    </div>
                </Carousel>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="project-item">
                <h2>BrainTrainer</h2>
                <h4> Developer / Tester </h4>
                <div className="project-description">
                  <p>
                    BrainTrainer is an Android application that helps train the 
                    user with addition problems. The game has a timer of 30 seconds 
                    and score is displayed with updates of every right and wrong answer.
                  </p>
                </div>
                <div className="project-technologies">
                  <ul className="skills">
                    <li>Android Studio</li>
                    <li>Java</li>
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

export default BrainTrainer;