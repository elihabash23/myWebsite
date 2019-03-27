import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import NewsReader1 from "../../screenshots/NewsReader1.png"
import NewsReader2 from "../../screenshots/NewsReader2.png"
// import NumberShapes1 from "../../screenshots/NumberShapes1.png";
// import NumberShapes2 from "../../screenshots/NumberShapes2.jpg";
// import NumberShapes3 from "../../screenshots/NumberShapes3.jpg";




class NewsReader extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div style={{marginLeft:'150px'}}>
                <Carousel width="300px">
                    <div>
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={NewsReader1} alt="Connect 3 img 1"/>
                    </div>
                    <div>
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={NewsReader2} alt="Connect 3 img 2"/>
                    </div>
                </Carousel>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="project-item">
              <h2 style={{display: "inline-block", paddingRight: "10px"}}>News Reader</h2> 
                    <a class="github-button" 
                      href="https://github.com/elihabash23/NewsReader" 
                      data-icon="octicon-star" 
                      aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                <h4> Developer / Tester </h4>
                <div className="project-description">
                  <p>
                  An Android application that shows a list of the top stories from the 
                  website Hacker News. Each item in the list view opens a web view 
                  to the link being pressed on.
                  </p>
                </div>
                <div className="project-technologies">
                  <ul className="skills">
                    <li>Android Studio</li>
                    <li>Java</li>
                    <li>JSON</li>
                    <li>SQLite</li>
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

export default NewsReader;