import React from "react";
import LikeHome from "./Projects/LikeHome";
import IHouse from "./Projects/IHouse";
import BetterWay from "./Projects/BetterWay";
import Connect3 from "./Projects/Connect3";
import BrainTrainer from "./Projects/BrainTrainer";
import NewsReader from "./Projects/NewsReader";
import WhatsTheWeather from "./Projects/WhatsTheWeather";
import HikersWatch from "./Projects/HikersWatch";
import PhotoGallery from "./Projects/PhotoGallery";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <IHouse />
        <LikeHome />
        <BetterWay />
        <PhotoGallery />
        <Connect3 />
        <BrainTrainer />
        <NewsReader />
        <WhatsTheWeather />
        <HikersWatch />
      </div>
    );
  }
}
Projects.propTypes = {};
export default Projects;
