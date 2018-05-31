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
    display: "flex"
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

class QuickAssess extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          title="Assessments"
          subheader="Proof of concept application for outreach and admissions"
        />
        <CardMedia
          className={classes.media}
          image="https://media.giphy.com/media/Qf5M9nrsS2S1SgP0fW/giphy.gif"
        />
        <CardContent>
          <a href="https://github.com/Craig-Orcutt/assessments">
            <img src={require("../../assets/githubIcon.svg")} alt="" />Source
            Code{" "}
          </a>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Typography
            onClick={this.handleExpandClick}
            style={{ marginRight: "2rem", fontWeight: "bold" }}
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
            label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="body2">
              Technologies Used: React, Express, Passport, PostGres, Seqelize
            </Typography>
            <Typography paragraph>
              This proof of concept web application allows therapists to provide
              inquiries to admissions departments at substance abuse treatment
              center. Admissions can log in as well and view inquiries submitted
              by therapists. Potential clients are given a severity score and
              reccomendation base on what was filled out by the therapist.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(QuickAssess);
