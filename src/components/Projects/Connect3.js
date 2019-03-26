import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import Connect3img1 from "../../screenshots/Connect3-1.jpeg";
import Connect3img2 from "../../screenshots/Connect3-2.png";



class Connect3 extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div style={{marginLeft:'150px'}}>
                <Carousel width="200px">
                    <div>
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={Connect3img1} alt="Connect 3 img 1"/>
                    </div>
                    <div>
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={Connect3img2} alt="Connect 3 img 2"/>
                    </div>
                </Carousel>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="project-item">
                <h2>Connect3</h2>
                <h4> Developer / Tester </h4>
                <div className="project-description">
                  <p>
                  Connect3 is an Android game where the objective is to connect three 
                  circles together either horizontally, vertically, or diagonally 
                  (Similar to Tic Tac Toe). Two players are required to play the game. 
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

export default Connect3;