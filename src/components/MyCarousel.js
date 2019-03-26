import React, { Component } from 'react'
import GIATimesheetScreenshot from "../screenshots/GIA-Timesheet.png";
import TimesheetScreenshot from "../screenshots/Timesheet.png";
import ScheduleScreenshot from "../screenshots/Schedule.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class MyCarousel extends Component {
  render() {
    return (

      <Carousel>
      <div>
          <img src={GIATimesheetScreenshot} alt="1st Pic"/>
      </div>
      <div>
          <img src={TimesheetScreenshot} alt="2nd Pic"/>
      </div>
      <div>
          <img src={ScheduleScreenshot} alt="3rd Pic"/>
      </div>
      </Carousel>
    //     <div>
    //       <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    //   <div class="carousel-inner">
    //     <div class="carousel-item active">
    //       <img class="d-block w-100" src="https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="First slide"/>
    //     </div>
    //     <div class="carousel-item">
    //       <img class="d-block w-100" src="https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Second slide"/>
    //     </div>
    //     <div class="carousel-item">
    //       <img class="d-block w-100" src="https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Third slide"/>
    //     </div>
    //   </div>
    //   <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span class="sr-only">Previous</span>
    //   </a>
    //   <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span class="sr-only">Next</span>
    //   </a>
    // </div>
    //     </div>
    );
  }
}

export default MyCarousel;
