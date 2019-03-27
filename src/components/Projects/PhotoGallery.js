import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import PhotoGallery1 from "../../screenshots/PhotoGallery1.png"
import PhotoGallery2 from "../../screenshots/PhotoGallery2.png"
import PhotoGallery3 from "../../screenshots/PhotoGallery3.png"

class PhotoGallery extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div style={{marginLeft:'150px'}}>
                <Carousel width="300px">
                    <div>
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={PhotoGallery1} alt="Connect 3 img 1"/>
                    </div>
                    <div>
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={PhotoGallery2} alt="Connect 3 img 2"/>
                    </div>
                    <div>
                        <img style={{border: '1px solid #dee2e6', borderRadius: '.25rem'}} src={PhotoGallery3} alt="Connect 3 img 2"/>
                    </div>
                </Carousel>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="project-item">
              <h2 style={{display: "inline-block", paddingRight: "10px"}}>Photo Gallery</h2> 
                    <a class="github-button" 
                      href="https://github.com/elihabash23/PhotoGallery" 
                      data-icon="octicon-star" 
                      aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                <h4> Developer / Tester </h4>
                <div className="project-description">
                  <p>
                    PhotoGallery is a networking Android Application that fetches
                     and displays the most recent public photos uploaded to Flickr. 
                     The user can search for any subject of photos and the app will 
                     bring back the most recently uploaded ones. 
                  </p>
                </div>
                <div className="project-technologies">
                  <ul className="skills">
                    <li>Android Studio</li>
                    <li>Flickr</li>
                    <li>Fragments</li>
                    <li>Java</li>
                    <li>JSON</li>
                    <li>REST</li>
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

export default PhotoGallery;