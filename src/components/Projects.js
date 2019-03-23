import React from "react";
import LikeHome from "./Projects/LikeHome";
import IHouse from "./Projects/IHouse";
import BetterWay from "./Projects/BetterWay";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <IHouse />
        <LikeHome />
        <BetterWay />
      </div>
    );
  }
}
Projects.propTypes = {};
export default Projects;
