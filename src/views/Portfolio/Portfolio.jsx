import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";
import { Link, withRouter } from "react-router-dom";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import { Route } from "react-router";
import portfolioRoutes from "../../routes/portfolioRoutes";
import subRoutes from "../../routes/subRoutes.jsx";


class Portfolio extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div>
        <GridContainer>
          {/* <GridItem>
            <div style={{ marginLeft: '135px', marginTop: '25px' }}>
              <Link to={"/dashboard/portfolio"} ><Button style={{ backgroundColor: '#fff', color: '#000' }}>Projects</Button></Link>
              <Link to={"/dashboard/portfolio/cources"} ><Button style={{ backgroundColor: '#fff', color: '#000' }}>Courses</Button></Link>
              <Link to={"/dashboard/portfolio/liked"} ><Button style={{ backgroundColor: '#fff', color: '#000' }}>Liked</Button></Link>
            </div>
        <GridContainer > */}

          <GridItem xs={12} sm={12} md={12}  >
            {/* <Button style={{ backgroundColor: '#fff', color: '#000' }} onClick={() => this.props.history.push('/dashboard/portfolio/Projects')}>Projects</Button> */}
            <Link to={"/dashboard/portfolio/"} ><Button style={{ backgroundColor: '#fff', color: '#000' }}>Projects</Button></Link>
            <Link to={"/dashboard/portfolio/Courses"} ><Button style={{ backgroundColor: '#fff', color: '#000' }}>Courses</Button></Link>
            <Link to={"/dashboard/portfolio/Liked"} ><Button style={{ backgroundColor: '#fff', color: '#000' }}>Liked</Button></Link>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem>
            {subRoutes.map((prop, key) => {
              if (prop.path == '/dashboard/portfolio/') {
                return <Route exact path={prop.path} key={key} component={prop.component} />;
              }
              else {
                return <Route path={prop.path} key={key} component={prop.component} />;
              }
            })}
          </GridItem>
        </GridContainer>
      </div>

    );
  }
}

export default withRouter(withStyles(profilePageStyle)(Portfolio));
