import React from "react";
import LikeHome from "./Projects/LikeHome";
import IHouse from "./Projects/IHouse";
import BetterWay from "./Projects/BetterWay";
import StudentLinked from "./Projects/StudentLinked";
import TicTacToe from "./Projects/TicTacToe";
import BugTracker from "./Projects/2020/BugTracker";
import BuildABurger from "./Projects/2020/BuildABurger";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <BugTracker />
        <BuildABurger />
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
