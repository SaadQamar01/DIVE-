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
import { Link } from "react-router-dom";
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
import axios from 'axios'
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import { loginRequest, signupRequest, facebookLogin, twitterLogin, gmailLogin } from '../../actions'
import image from "assets/img/bg7.jpg";
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login';
import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      isEmailError: false,
      isEmailSuccess: false,
      isPasswordError: false,
      isPasswordSuccess: false,
      password: '',
      email: '',
      fbUser: {}
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

  responseFacebook = (response) => {
    console.log(response);
  }
  // fLogin = () => {
  //   appId = "1825203637776513"
  //   autoLoad = { true}
  //   fields = "name,email,public_profile"
  //   onClick = { componentClicked }
  //   callback = { this.responseFacebook() }
  // }




  getEmail = (_email) => {
    console.log(_email);
    this.setState({
      email: _email
    })
  }

  getPassword = (password) => {
    this.setState({
      password: password
    })
    console.log(password);
  }

  login = () => {
    console.log("LOGIN FUNCTION")
    let data = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.actions.loginRequest(data).then((response) => {
      console.log("RESPONSE DATA ", response)
    }, (error) => {
      console.log(error)
    });
  }
  responseFacebook = (response) => {
    console.log("FB RESPONSE FUVN")
    console.log(response);
  }
  onSuccess =(response)=> {
    response.json().then(body => {
      alert(JSON.stringify(body));
    });
  }

  onFailed=(error)=> {
    alert(error);
  }

  render() {
    console.log(this.props);
    const { classes, ...rest } = this.props;
    const responseGoogle = (response) => {
      console.log("GOOGLE RESPONSE FUNC")
      console.log(response);
      const customHeader = {};
      customHeader['Test'] = 'test-header';
    }
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        {/* <GoogleLogin
          clientId="724803736117-uaegelah9fhd0nkcs3jvjcvpjqjm019t.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        <FacebookLogin
          appId="1825203637776513"
          autoLoad={true}
          fields="name,email"
          // onClick={componentClicked}
          callback={this.responseFacebook} />
           <TwitterLogin 
           loginUrl="http://localhost:4000/api/v1/auth/twitter"
              onFailure={this.onFailed}
              onSuccess={this.onSuccess}
              requestTokenUrl="	https://api.twitter.com/oauth/request_token"
              showIcon={true}
              // customHeaders={customHeader}
              >
    <b>Custom</b> Twitter <i>Login</i> content
</TwitterLogin> */}
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
                      <h4>Login</h4>
                      <div className={classes.socialLine}>
                        {/* <h4>Registration</h4> */}
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
                          onClick={e => this.facebookLogin(e)}
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
                    <p className={classes.divider}>   </p>
                    <CardBody>
                      {/* <CustomInput
                        labelText="First Name..."
                        id="first"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      /> */}
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        getValue={this.getEmail}
                        success={false}
                        error={false}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
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
                    {/* <Link to={"/signup-page"} className={{}}>
                      <Button simple color="primary" size="sm" style={{ marginLeft: '60%' }} >
                        Create Account?
                      </Button>
                    </Link> */}
                    <CardFooter className={classes.cardFooter}>
                      {/* <Link to={"/dashboard"} className={{}}> */}
                      <Button simple color="warning" size="lg" onClick={() => this.login()}>
                        DIVE IN
                      </Button>
                      {/* </Link> */}
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(loginPageStyle)(LoginPage));
