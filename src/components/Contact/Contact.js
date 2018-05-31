import React from "react";
import FormModal from '../FormModal/FormModal'
import { FormGroup, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Send from "@material-ui/icons/Send";
import "./contact.css";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    background: ' rgb(108, 223, 163)'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  form: {
    margin: '0 20%'
  },
  background : {
    background: ' rgba(98, 193, 163, 0.8)'
  }
});

class Contact extends React.Component {
  submitButton = React.createRef();
  state = {
    open: false,
  }
  handleClick = () => {
    console.log('test', );
    this.submitButton.click();
    this.setState({
      open: true
    })
  };
  render() {
    const { classes } = this.props;
    return (
      <div id="contact">
      <h2>Contact</h2>
      <form
        action="https://formspree.io/craigaorcutt@gmail.com"
        method="POST"
      >
      <FormGroup className={classes.form}>
        <TextField label="Name" name='name'/>
        <TextField label="Email" name='email' />
        <TextField label="Number" name='number' />
        <TextField label="Message" name='message' multiline rows='3'/>
        <Button type='submit' className={classes.button} variant="raised" color="primary" ref={(el) => {this.submitButton = el}}>
          Send
          <Send className={classes.rightIcon} />
        </Button>
        </FormGroup>
      </form>
        <div className="contactIcons">
          <a href="https://github.com/Craig-Orcutt" target="_blank" rel="noopener noreferrer" >
            <img
              src={require("../../assets/githubIcon.svg")}
              alt="Git on My Level"
            />
          </a>
          <a href="https://www.linkedin.com/in/craig-orcutt/" target="_blank" rel="noopener noreferrer">
            <img
              src={require("../../assets/linkedInIcon.png")}
              alt="Lets Link Up!"
            />
          </a>
          <a href="https://www.facebook.com/craig.orcutt.3" target="_blank" rel="noopener noreferrer">
            <img
              src={require("../../assets/facebookIcon.png")}
              alt="Facebook is watching you"
            />
          </a>
        </div>
        <FormModal open={this.state.open} />
      </div>
    );
  }
}
export default withStyles(styles)(Contact);
