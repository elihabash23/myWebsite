import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import imageNotFound from '../../../screenshots/imageNotFound.png';
import toppings1 from '../../../screenshots/BuildABurger_Toppings1.png';
import toppings2 from '../../../screenshots/BuildABurger_Toppings2.png';
import receipt from '../../../screenshots/BuildABurger_Receipt.png';
import contactData from '../../../screenshots/BuildABurger_Contact.png';
import orders from '../../../screenshots/BuildABurger_Orders.png';

class BuildABurger extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Carousel >
							  <div>
                  	<img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={toppings1} alt={imageNotFound}/>
                </div>
                <div>
                  	<img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={toppings2} alt={imageNotFound}/>
                </div>
                <div>
                  	<img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={receipt} alt={imageNotFound}/>
                </div>
                <div>
                  	<img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={contactData} alt={imageNotFound}/>
                </div>
                <div>
                  	<img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={orders} alt={imageNotFound}/>
                </div>
					</Carousel>
            </div>

            <div className="col-lg-6">
              <div className="project-item">
                <h2 style={{display: "inline-block", paddingRight: "10px"}}>BuildABurger</h2> 
                    <a class="github-button" 
                      href="https://github.com/elihabash23/Build-A-Burger" 
                      data-icon="octicon-star" 
                      aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                <h4> Full Stack Developer </h4>
                <div className="project-description">
                  <p>
										A React web application where users can build their own burger. 
										Front end technologies consisted of the JavaScript, HTML, CSS, React.js, and Redux. 
                  </p>
                </div>
                <div className="project-technologies">
                  <ul className="skills">
							<li>React</li>
                  	<li>Redux</li>
                  	<li>HTML</li>
                  	<li>CSS</li>
                  	<li>JavaScript</li>
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

export default BuildABurger;
