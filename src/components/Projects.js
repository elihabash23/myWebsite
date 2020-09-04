import React from "react";
import LikeHome from "./Projects/LikeHome";
import IHouse from "./Projects/IHouse";
import BetterWay from "./Projects/BetterWay";
import StudentLinked from "./Projects/StudentLinked";
import TicTacToe from "./Projects/TicTacToe";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <TicTacToe />
        <StudentLinked />
        <IHouse />
        <LikeHome />
        <BetterWay />
      </div>
    );
  }
}
Projects.propTypes = {};
export default Projects;
