import React from "react";
import { Tab, Tabs, AppBar,withStyles, Typography } from "@material-ui/core";
import "./navbar.css";

const styles = theme => ({
  bigIndicator: {
    height: 6,
    background:'rgb(186, 218, 85)',
    borderBottom: '2px solid rgb(6, 214, 160)',
    borderRadius: '1px'
  },
  background : {
    background: ' rgba(98, 193, 163, 0.8)'
  }
});


class NavBar extends React.Component {
  
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  
  render() {
    const { classes } = this.props;


    return (
      <div className="navBar">
        <AppBar classes={{colorPrimary: classes.background}} title="Craig Orcutt">
          <Tabs classes={{ indicator: classes.bigIndicator }} value={this.state.value} onChange={this.handleChange} centered>
            <Tab label="About" href="#about" />
            <Tab label="Projects" href="#projects" />
            <Tab label="Contact" href="#contact" />

          </Tabs>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(NavBar);
