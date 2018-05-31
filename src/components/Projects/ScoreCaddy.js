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
    paddingTop: "56.25%" // 16:9
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

class ScoreCaddy extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader title="ScoreCaddy" subheader="" />
        <CardMedia
          className={classes.media}
          image="https://media.giphy.com/media/JF8SOTMVuTfZHfY2Hy/giphy.gif"
        />
        <CardContent>
          <Language />
          <a href="https://scorecard-2a336.firebaseapp.com/#!/home">
            Deployed Site{" "}
          </a>
          <a href="https://github.com/Craig-Orcutt/scorecard">
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
              Technologies Used: AngularJS, ChartJS, Firebase, GoogleAuth, CSS
              Grid
            </Typography>
            <Typography paragraph>
              A CRUD-based single-page-application for golfers who play on
              Nashville Metro Golf Courses. Built using AngularJS with data
              being stored on Firebase. Players can keep score of their rounds
              as well as check multiple stats for individual and overall rounds.
              Focused on creating a flat database, usability and utilizing CSS
              Grid
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(ScoreCaddy);
