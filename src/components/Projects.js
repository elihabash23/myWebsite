import React from "react";
import LikeHome from "./Projects/LikeHome";
import IHouse from "./Projects/IHouse";
import BetterWay from "./Projects/BetterWay";
import Connect3 from "./Projects/Connect3";
import BrainTrainer from "./Projects/BrainTrainer";
import NumberShapes from "./Projects/NumberShapes";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <IHouse />
        <LikeHome />
        <BetterWay />
        <Connect3 />
        <BrainTrainer />
        <NumberShapes />
      </div>
    );
  }
}
Projects.propTypes = {};
export default Projects;
