/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to={"/signup-page"}>
          <Button
            style={{ fontSize: 15 }}
            
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            REGISTER
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to={"/"}>
        <Button
          style={{ fontSize: 15 }}
          color="transparent"
          target="_blank"
          className={classes.navLink}
          >
          LOGIN
        </Button>
          </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          style={{ fontSize: 15 }}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          UNLOCK
        </Button>
      </ListItem>

    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
