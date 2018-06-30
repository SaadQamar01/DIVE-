import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { connect } from 'react-redux'; //to pass functions
import { bindActionCreators } from 'redux';
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import { loginRequest, signupRequest, facebookLogin, twitterLogin, gmailLogin } from '../../actions'


import signupPageStyle from "assets/jss/material-kit-react/views/signupPage.jsx";

import image from "assets/img/bg7.jpg";
import { Link } from "react-router-dom";

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      email: '',
      password: '',
      firstName: '',
      lastName: ''

    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  signup = () => {
    let data = {
      email: this.state.email,
      password: this.state.password,
      profile: {
        firstName: this.state.firstName,
        lastName: this.state.lastName
      }
    }
    this.props.actions.signupRequest(data).then((response) => {
      console.log("RESPONSE DATA ", response)
      this.props.history.push('/')
    }, (error) => {
      console.log(error)
    });
  }


  getEmail = (_email) => {
    console.log(_email);
    this.setState({
      email: _email
    })
  }

  getPassword = (_password) => {
    this.setState({
      password: _password
    })
    console.log(_password);
  }
  getFirstName = (fName) => {
    this.setState({
      firstName: fName
    })
    console.log(fName);
  }
  getLastName = (lName) => {
    this.setState({
      lastName: lName
    })
    console.log(lName);
  }


  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="warning" className={classes.cardHeader}>
                      <h4>REGISTER</h4>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-twitter"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-facebook"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-google-plus-g"} />
                        </Button>
                      </div>
                    </CardHeader>
                    <p className={classes.divider}></p>
                    <CardBody>
                      <CustomInput
                        labelText="First Name"
                        id="fistName"
                        formControlProps={{
                          fullWidth: true
                        }}
                        getValue={this.getFirstName}
                        success={this.state.isPasswordSuccess}
                        error={this.state.isPasswordError}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />

                      <CustomInput
                        labelText="Last Name..."
                        id="last"
                        formControlProps={{
                          fullWidth: true
                        }}
                        getValue={this.getLastName}
                        success={this.state.isPasswordSuccess}
                        error={this.state.isPasswordError}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Email..."
                        id="Email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        getValue={this.getEmail}
                        success={this.state.isPasswordSuccess}
                        error={this.state.isPasswordError}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        getValue={this.getPassword}
                        success={this.state.isPasswordSuccess}
                        error={this.state.isPasswordError}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutline
                                className={classes.inputIconsColor}
                              />
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    {/* <Link to={"/"} className={{}}>
                      <Button simple color="warning" size="sm" style={{ marginLeft: '60%' }}>
                        Already Account?
                      </Button>
                    </Link> */}
                    <CardFooter className={classes.cardFooter}>
                      {/* <Link to={"/dashboard"} className={{}}> */}

                      <Button simple color="warning" size="lg" onClick={() => this.signup()}>
                        Sign Up
                      </Button>
                      {/* </Link> */}
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div >
    );
  }
}

function mapStateToProps(state) {
  //pass the providers
  return {
    // auth: state.auth
  }
}

/* Map Actions to Props */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loginRequest, signupRequest, facebookLogin, twitterLogin, gmailLogin
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(signupPageStyle)(SignupPage));

