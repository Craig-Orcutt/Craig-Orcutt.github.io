import React from 'react';
import './navbar.css';



class NavBar extends React.Component {
  render() {
    return (
      <div className='navBar'>
        <div className="craig">
        <p className="name">Craig Orcutt</p>
        <div className="imgContainer">
        <img src={require("../../assets/profilePic.png")} alt="Craig Orcutt"/>
        </div>
        <p className="tagline">Software Developer</p>
        </div>
        <div className="navLink">
          <a href="#about" className="href">About</a>
        </div>
        <div className="navLink">
          <a href="#projects" className="href">Projects</a>
        </div>
        <div className="navLink">
          <a href="#contact" className="href">Contact</a>
        </div>
      </div>

    )
  }
}
export default NavBar