import React from 'react';
import './profile.css';

class Profile extends React.Component {
  render() {
    return(
      <div className="craig">
      <p className="name">Craig Orcutt</p>
      <div className="imgContainer">
      <img src={require("../../assets/profilePic.png")} alt="Craig Orcutt"/>
      </div>
      <p className="tagline">Software Developer</p>
      </div>
    )
  }
}

export default Profile