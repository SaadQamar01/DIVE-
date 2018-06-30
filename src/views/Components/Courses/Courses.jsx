import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import CoursePageStyle from "../../../assets/jss/material-kit-react/views/coursePage.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from '@material-ui/core/Card';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
class Courses extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div >
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <GridContainer style={{ marginTop: '40px' }}>
              <GridItem md={6}>
                <div className={classes.card_div}>
                  <Card className={classes.cardStyle}>
                    <div className={classes.cardText}>
                      <span>
                        Courses 1
                  </span>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem md={6}>
                <div className={classes.card_div}>
                  <Card className={classes.cardStyle}>
                    <div className={classes.cardText}>
                      <span>
                        Courses 2
                  </span>
                    </div>
                  </Card>
                </div>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} style={{ marginTop: '20px' }}>
            <ExpansionPanel className={classes.expansionPanel}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Sort By</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
          </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </GridItem>
        </GridContainer>
      </div >
    );
  }
}

export default withStyles(CoursePageStyle)(Courses);
