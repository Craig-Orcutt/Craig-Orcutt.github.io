import React from "react";
import "./about.css";
import { Paper } from "@material-ui/core";

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <Paper>
          <div className="bio">
            <h4>About Me</h4>
            <p>
              Since I was a child, I have constantly searched for what makes me
              tick. When I found programming, something clicked. I have been
              hooked ever since, waking up every morning with a desire to learn
              more. I have always enjoyed learning how things work. As the son
              of an electrical engineer, I was encouraged to take things apart
              and then(hopefully) put them back together. From my first "Hello
              World" to building a full stack application, my passion for coding
              has only increased. Today nothing satisfies me more than getting
              those "small wins" or experimenting with new(to me) design styles.
              </p>
              <p>
              When I'm able to take my eyes away from a computer screen, I enjoy
              tending to my flowers, carving up a good hunk of wood or just
              enjoying the great outdoors.{" "}
              </p>
          </div>
        </Paper>
      </div>
    );
  }
}
export default About;
