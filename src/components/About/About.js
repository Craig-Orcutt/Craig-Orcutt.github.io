import React from 'react';
import './about.css';

class About extends React.Component {
  render() {
    return (
      <div id="about">
        
      <div className="craig">
      <p className="name">Craig Orcutt</p>
      <div className="imgContainer">
      <img src={require("../../assets/profilePic.png")} alt="Craig Orcutt"/>
      </div>
      <p className="tagline">Software Developer</p>
      </div>

      </div>

    )
  }
}
export default About