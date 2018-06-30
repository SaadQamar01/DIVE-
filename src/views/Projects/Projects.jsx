import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";


class Projects extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div>
         Projects
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(Projects);
