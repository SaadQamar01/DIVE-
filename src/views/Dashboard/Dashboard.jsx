import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import { Link, withRouter } from "react-router-dom";
import profile from "assets/img/faces/christian.png";
import { Route } from "react-router";
import mainRoutes from "../../routes/mainRoutes.jsx";
import profilePageStyle from "../../assets/jss/material-kit-react/views/profilePage.jsx";
import EditableSection from '../EditableSection/EditableSection';
import Platform from 'react-platform-js'

class Dashboard extends React.Component {
    render() {
        const { classes, ...rest } = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );

        const responseStyle = Platform.DeviceType === 'mobile' ? 'mRoot' : 'root';
        return (
            <div>
                <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div>
                                        <img src={profile} alt="..." className={imageClasses} />
                                    </div>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>Name</h3>
                                        <h5>Designation</h5>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-twitter"} />
                                        </Button>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-instagram"} />
                                        </Button>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-facebook"} />
                                        </Button>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-youtube"} />
                                        </Button>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-linkedin"} />
                                        </Button>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-google-plus"} />
                                        </Button>
                                    </div>
                                        <Button style={{ backgroundColor: '#fff', color: '#000' }} onClick={() => this.props.history.push('/dashboard')}>Profile</Button>
                                        <Link to={"/dashboard/portfolio"} ><Button style={{ backgroundColor: '#fff', color: '#000' }}>Portfolio</Button></Link>
                                        <Link to={"/dashboard/connections"} ><Button style={{ backgroundColor: '#fff', color: '#000' }}>Connections</Button></Link>
                                        <Link to={"/dashboard/discover"} ><Button style={{ backgroundColor: '#fff', color: '#000' }}>Discover</Button></Link>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem sm={12} xs={12} md={4}>
                                <EditableSection />
                            </GridItem>
                            <GridItem sm={12} xs={12} md={8} >
                                {mainRoutes.map((prop, key) => {
                                    if (prop.path == '/dashboard') {
                                        return <Route exact path={prop.path} key={key} component={prop.component} />;
                                    }
                                    else {
                                        return <Route path={prop.path} key={key} component={prop.component} />;
                                    }
                                })}
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(withStyles(profilePageStyle)(Dashboard));
