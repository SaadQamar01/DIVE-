import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import profilePageStyle from "../../assets/jss/material-kit-react/views/profilePage.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from '@material-ui/core/Card';

// Dialogue imports
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';


class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openProject: false
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, ...rest } = this.props;
    const { fullScreen } = this.props;
    // const imageClasses = classNames(
    //   classes.imgRaised,
    //   classes.imgRoundedCircle,
    //   classes.imgFluid
    // );
    const image = require('../../assets/img/faces/christian.jpg')
    return (
      <div>
        {/* Add A project Dialogue */}
<Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Add a Project"}</DialogTitle>
          <DialogContent>
          
          <TextField
              autoFocus
              
              margin="normal"
              label="Project title"
              placeholder='Add a project title'
              fullWidth
            />
          <TextField
          InputLabelProps={{
            shrink: true,
          }}
              autoFocus
              margin="normal"
              label="Category"
              placeholder='Start typing a category'
              fullWidth
            />
          <TextField
          InputLabelProps={{
            shrink: true,
          }}
              autoFocus
              margin="normal"
              label="Description"
              placeholder='Describe your project'
              multiline
              rows="4"
              fullWidth
              helperText="Insert link into description"
            />
          <TextField
          InputLabelProps={{
            shrink: true,
          }}
              autoFocus
              margin="normal"
              label="Skills, Tools or Software"
              placeholder='Search for a skill to add'
              fullWidth
              helperText="Improve these suggestions"
            />
          <TextField
          InputLabelProps={{
            shrink: true,
          }}
              autoFocus
              margin="normal"
              label="Teammates"
              placeholder='Search for a teammate to add'
              fullWidth
            />
          <TextField
          InputLabelProps={{
            shrink: true,
          }}
              autoFocus
              margin="normal"
              label="Tags"
              placeholder='Search for a tag to add'
              fullWidth
            />

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}  variant="contained" >
              FINISH LATER
            </Button>
            <Button onClick={this.handleClose} color="primary" variant="contained" autoFocus>
              PUBLISH
            </Button>
          </DialogActions>
        </Dialog>

{/* Add A project Dialogue  End*/}
        <GridContainer style={{ marginTop: '40px' }}>
          <GridItem md={4}>
            <div className={classes.card_div}>
              <div className={classes.roundPicDiv}>
                <img className={classes.img} src={image} />
              </div>
              <Card className={classes.cardStyle} onClick={this.handleClickOpen}>
                <div className={classes.cardText}>
                  <span>
                    Add a Project
                  </span>
                </div>
              </Card>
            </div>



            <div className={classes.card_div}>
              <div className={classes.roundPicDiv}>
                <img className={classes.img} src={image} />
              </div>
              <Card className={classes.cardStyle}>
                <div className={classes.cardText}>
                  Add a Course
                </div>
              </Card>
            </div>
          </GridItem>
          <GridItem md={4}>
            <div className={classes.card_div}>
              <div className={classes.roundPicDiv}>
                <img className={classes.img} src={image} />
              </div>
              <Card className={classes.cardStyle}>
                <div className={classes.cardText}>
                  Add a Resume
                </div>
              </Card>
            </div>
            <div className={classes.card_div}>
              <div className={classes.roundPicDiv}>
                <img className={classes.img} src={image} />
              </div>
              <Card className={classes.cardStyle}>
                <div className={classes.cardText}>
                  Add an accomplishment
                </div>
              </Card>
            </div>
          </GridItem>
          <GridItem md={4}>
            <div className={classes.rightSider}>
              <div style={{ marginBottom: '15px', position: 'relative' }}>
                <span style={{ display: "inline-block", marginRight: '10px' }}>Add an Avatar</span>
                <i class="material-icons" style={{ position: 'absolute' }}>check_circle_outline</i>
              </div>
              <div style={{ marginBottom: '15px', position: 'relative' }}>
                <span style={{ display: "inline-block", marginRight: '10px' }}>
                  Add a cover photo
                </span>
                <i class="material-icons" style={{ position: 'absolute' }}>check_circle_outline</i>
              </div>
            </div>
          </GridItem>
        </GridContainer>

      </div >
    );
  }
}

Profile.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withStyles(profilePageStyle)(Profile);