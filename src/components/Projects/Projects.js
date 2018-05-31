import React from "react";
import QuickAssess from "./QuickAssess";
import ScoreCaddy from "./ScoreCaddy";
import CheckIn from "./CheckIn";
import "./projects.css";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <div id="projects">
          <div>
            <QuickAssess />
            <ScoreCaddy />
            <CheckIn />
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
