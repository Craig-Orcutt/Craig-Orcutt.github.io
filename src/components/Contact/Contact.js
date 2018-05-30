import React from "react";
import {FormGroup, FormLabel, TextField} from '@material-ui/core'
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
          <FormGroup>
            <TextField label="Name" />
            <TextField label="Email" />
            <TextField label="Number" />
          </FormGroup>
        </div>
      </div>
    );
  }
}
export default Contact;
