import React from "react";
import "./contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <div className="contactIcons">
          <a href="https://github.com/Craig-Orcutt" target="_blank">
            <img src={require("../../assets/githubIcon.svg")} alt="Git on My Level" />
          </a>
          <a href="https://www.linkedin.com/in/craig-orcutt/" target="_blank">
            <img src={require("../../assets/linkedInIcon.png")} alt="Lets Link Up!" />
          </a>
          <a href="https://www.facebook.com/craig.orcutt.3" target="_blank">
            <img src={require("../../assets/facebookIcon.png")} alt="Facebook is watching you" />
          </a>
          <a href="mailto:craigaorcutt@gmail.com" target="_top">
            <img src={require("../../assets/emailIcon.png")} alt="Send me a Line!" />
          </a>
        </div>
      </div>
    );
  }
}
export default Contact;
