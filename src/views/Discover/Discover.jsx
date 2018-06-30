import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import DiscoverPageStyle from "../../assets/jss/material-kit-react/views/discoverPage.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Discover extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const image = require('../../assets/img/apple-icon.png')
    const media_image = require('../../assets/img/bg3.jpg')
        // const responseStyle = Platform.DeviceType === 'mobile' ? 'mRoot' : 'root';
    
    return (
      <div >
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <GridContainer style={{ marginTop: '60px' }} justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <Card style={{ height: '90px', borderRadius: '10px', padding: '20px 40px' }}>
                  <span style={{
                    display: 'inline-block',
                    width: '50px',
                    height: '50px',
                    border: ' 2px solid',
                    borderRadius: '25px',
                    textAlign: 'center',
                    paddingTop: '10px',
                  }}>JJ</span>
                  <span style={{
                    display: 'inline-block',
                    marginLeft: '20px'
                  }}>What have you been excitedly working on?</span>
                  <span>
                    {/* <img src={image} /> */}
                    <i style={{
                      display: 'inline-block',
                      float: 'right',
                      fontSize: '35px'
                    }} class="material-icons">
                      description
                    </i>
                  </span>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <Card style={{ height: '400px', marginTop: '20px', borderRadius: '10px', padding: '20px 40px' }}>
                  <div>
                    <span style={{
                      display: 'inline-block',
                      width: '50px',
                      height: '50px',
                      border: ' 2px solid',
                      borderRadius: '25px',
                      textAlign: 'center',
                    }}></span>
                    <span style={{
                      display: 'inline-block',
                      marginLeft: '20px'
                    }}>
                      <span style={{ fontWeight: 'bold' }}>
                        Chris James
                    </span>
                      <span style={{ display: 'block', fontSize: '14px' }}>17 hrs ago</span>
                    </span>
                  </div>
                  <div>
                    {/* <Card> */}
                    <GridContainer>
                      <GridItem md={10} xs={12} sm={8}>
                        <Card style={{ borderRadius: '10px', margin: 'auto', width: '75%', marginTop: '30px' }}>
                          <img src={media_image} width='100%' height="180px" />
                          <div style={{ padding: '20px' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '17px', }}>
                              Project/Course Name
                            </div>
                            <div>
                              Industry/Major
                            </div>
                          </div>
                        </Card>
                      </GridItem>
                      <GridItem md={2}  xs={12} sm={4}>
                        <div style={{ marginTop: '30px', width: '100%', textAlign: 'center', paddingTop: '20px' }}>
                          <div style={{ marginBottom: '20px', position: 'relative' }}>
                            <i class="material-icons">thumb_up</i>
                            <span style={{
                              position: 'absolute',
                              top: '3px',
                              right: '10px'
                            }}>
                              0
                            </span>
                          </div>
                          <div style={{ position: 'relative' }}>
                            <i class="material-icons">comment</i>
                            <span style={{
                              position: 'absolute',
                              top: '3px',
                              right: '10px'
                            }}>
                              0
                            </span>
                          </div>
                        </div>
                      </GridItem>
                    </GridContainer>
                    {/* </Card> */}
                  </div>
                </Card>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} style={{ marginTop: '20px' }}>
            <div style={{border:'1px solid grey',width:'40%',borderRadius:'15px',position:'relative',float:'right',marginRight:'30px'}}>
              <input type="search" name="search Bar" placeholder='Search' id="searchbar" style={{width:'70%',border:'none',marginLeft:'10px'}}/>
              <i class="material-icons" style={{position:'absolute'}}>search</i>
            </div>
          </GridItem>
        </GridContainer>
      </div >
    );
  }
}

export default withStyles(DiscoverPageStyle)(Discover);
