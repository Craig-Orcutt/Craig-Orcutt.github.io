import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import classnames from "classnames";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Language from "@material-ui/icons/Language";

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: '10px auto'
  },
  media: {
    height: 0,
    paddingTop: "100%" // 16:9
  },
  actions: {
    display: "flex",
    marginLeft: "auto"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class CheckIn extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader title="CheckIn" subheader="An remote accountability app for the sober-living community" />
        <CardMedia
          
          className={classes.media}
          image={require("../../assets/checkin.jpeg")}
        />
        <CardContent>

          <a href="https://github.com/Craig-Orcutt/checkin">
            {" "}
            <img src={require("../../assets/githubIcon.svg")} alt="" />Source
            Code{" "}
          </a>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Typography
            h2
            onClick={this.handleExpandClick}
            style={{ marginLeft: "2rem", fontWeight: "bold" }}
            paragraph
          >
            More Info
          </Typography>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="body2">
              Technologies Used: React Native, Expo.io
            </Typography>
            <Typography paragraph>
              CheckIn is a native application developed for a sober living house to allow remote curfew checkins for residents. User opens up application and takes a picture of themselves. Once a picture is selected, Email is automatically opened up and can then send picture to specified email. Location and timestamp are included in the email.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(CheckIn);