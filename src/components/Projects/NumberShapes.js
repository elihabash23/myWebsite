import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import NumberShapes1 from "../../screenshots/NumberShapes1.png";
import NumberShapes2 from "../../screenshots/NumberShapes2.jpg";
import NumberShapes3 from "../../screenshots/NumberShapes3.jpg";




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
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={NumberShapes1} alt="Connect 3 img 1"/>
                    </div>
                    <div>
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={NumberShapes2} alt="Connect 3 img 2"/>
                    </div>
                    <div>
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={NumberShapes3} alt="Connect 3 img 2"/>
                    </div>
                </Carousel>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="project-item">
                <h2>NumberShapes</h2>
                <h4> Developer / Tester </h4>
                <div className="project-description">
                  <p>
                  NumberShapes is an Android app where the user will be informed if 
                  the number they enter is either a square number, a triangular number, 
                  or neither. 
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