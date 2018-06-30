import React from "react";
import classNames from "classnames";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
// ICON
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Add from '@material-ui/icons/Add';
// Images
import profile from "assets/img/faces/christian.png";
import degree from "assets/img/degree.png";
import experience from "assets/img/experience.png";
import Microsoft from "assets/img/Microsoft.png";


// import BigCalendar from 'react-big-calendar'
// import moment from 'moment'





const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        textAlign: 'center'
    },
});

const Right = {
    float: 'right'
}
const calendarHead = {
    float: 'right',
    fontWeight: 'bold'
}
const boldHead = { fontWeight: 'bold' }
const jobFont = {
    fontSize: '12px'
}


// BigCalendar.momentLocalizer(moment)

class EditableSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: '3',
            education: false,
            experience: false,
            skills: false,
            referals: false,
            jobs: false,
            
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    render() {
        const { classes, ...rest } = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );
        return (
            <GridContainer>
                <GridItem md={10}>
                    <Card>
                        <CardBody>
                            <div style={{ border: "3px solid black", borderRadius: 8, textAlign: "center" }}>
                                <div style={{ paddingTop: 5, fontSize: '15px', color: 'red', fontWeight: 'bold' }}>
                                    Overview
                                </div>
                                <div style={{ fontSize: '8' }}>
                                    Work Experience
                                </div>
                                <div style={{ fontSize: '8' }}>
                                    Country
                                </div>
                                <div >
                                    <Button justIcon link >
                                        <i className={"fab fa-instagram"} />
                                    </Button>
                                    <Button justIcon link >
                                        <i className={"fab fa-instagram"} />
                                    </Button>
                                    <Button justIcon link >
                                        <i className={"fab fa-instagram"} />
                                    </Button>
                                </div>
                                <div>
                                    <Button link style={{ width: 75 }}>
                                        Projects <span style={{ marginBottom: 7, padding: 5, fontSize: 15, color: 'red', fontWeight: 'bold' }} className="badge badge-default" >0</span>
                                    </Button>
                                    <Button link style={{ width: 90 }}>
                                        Skills <span style={{ marginBottom: 7, padding: 3, fontSize: 15, color: 'red', fontWeight: 'bold' }} className="badge badge-default" >0</span>
                                    </Button>
                                    <Button link style={{ width: 90 }}>
                                        Connections <span style={{ marginBottom: 7, padding: 3, fontSize: 15, color: 'red', fontWeight: 'bold' }} className="badge badge-default" >0</span>
                                    </Button>
                                </div>
                            </div>
                            <div className={classes.root}>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>Calender</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>

                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div style={{ flex: 1, borderBottom: '3px solid #a9abad' }}>
                                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                    <div style={{ flex: 1 }}>
                                                        <div style={boldHead}>Agenda Name</div>
                                                        <div>DD:HH:MM:SS</div>
                                                    </div>
                                                    <div style={{ flex: 1.5 }}>
                                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                            <div style={{ flex: 1, marginLeft: '40px' }}>
                                                                <div style={calendarHead}>Local City</div>
                                                                <div style={Right}>Ddd 15,06:00 AM</div>
                                                                <div style={Right}>25.99c Clear</div>
                                                            </div>
                                                            <div style={{ flex: 1, marginLeft: '40px' }}>
                                                                <div style={calendarHead}>Destination City</div>
                                                                <div style={Right}>Ddd 15,06:00 AM</div>
                                                                <div style={Right}>28.24c Rain</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div style={{ flex: 1, marginTop: '5px' }}>
                                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                    <div style={{ flex: 1, maxWidth: '50px' }}>
                                                        Month <ExpandMoreIcon />
                                                    </div>
                                                    <div style={{ flex: 1, maxWidth: '50px' }}>
                                                        Week <ExpandMoreIcon />
                                                    </div>
                                                    <div style={{ flex: 1, maxWidth: '50px' }}>
                                                        Day <ExpandMoreIcon />
                                                    </div>
                                                    <div style={{ flex: 1, maxWidth: '50px' }}>
                                                        Agenda <ExpandMoreIcon />
                                                    </div>
 {/* <BigCalendar
    
    step={60}
    showMultiDayTimes
    defaultDate={new Date(2015, 3, 1)}
  /> */}
                                                </div>
                                            </div>

                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>Education </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails  >
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>


                                            <div style={{ flex: 1 }}>

                                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                    <div style={{ flex: 1 }}>

                                                        <img src={degree} alt="..." className={imageClasses} height={60} width={60} />
                                                    </div>
                                                    <div style={{ flex: 2 }}>


                                                        {
                                                            (this.state.education) ? (
                                                                <div>

                                                                    <input type="text" placeholder='school' />
                                                                    <input type="text" placeholder='Degree' />
                                                                    <input type="text" placeholder='Year' />
                                                                    <input type="text" placeholder='Additional Description' />
                                                                    <button onClick={() => this.setState({ education: !this.state.education })}>Save</button>
                                                                    <button onClick={() => this.setState({ education: !this.state.education })}>Cancel</button>

                                                                </div>
                                                            ) : (
                                                                    <div>
                                                                        <Add style={{ float: 'right' }} onClick={() => this.setState({ education: !this.state.education })} />
                                                                        <div style={{ fontWeight: 'bold', fontSize: 17 }}> School </div>
                                                                        <div >Degree, Major,Grade/Honors</div>
                                                                        <div> YYYY (Honors options:  </div>
                                                                        <div> Honors, Mangna Cum Laude, </div>
                                                                        <div> Summa Cum Laude) </div>
                                                                        <div style={{ paddingTop: '10px' }}> Additional Description  </div></div>)
                                                        }

                                                    </div>
                                                </div>
                                            </div>

                                            <div style={{ flex: 1, paddingTop: '10px' }}>
                                                <div style={{ display: 'flex', flexDirection: 'row' }}>

                                                    <div style={{ flex: 3 }}>
                                                        Show More
                                            </div>
                                                    <div style={{ flex: 1 }}>
                                                        <ExpandMoreIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>


                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>Experience</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ flex: 1 }}>

                                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                    <div style={{ flex: 1 }}>
                                                        <img src={experience} alt="..." className={imageClasses} height={60} width={60} />
                                                    </div>
                                                    <div style={{ flex: 2 }}>


                                                        {
                                                            (this.state.experience) ? (
                                                                <div>
                                                                    <input type="text" placeholder='Position' />
                                                                    <input type="text" placeholder='Organization' />
                                                                    <input type="text" placeholder='City/Zone' />
                                                                    <input type="text" placeholder='Job Description' />
                                                                    <button onClick={() => this.setState({ experience: !this.state.experience })}>Save</button>
                                                                    <button onClick={() => this.setState({ experience: !this.state.experience })}>Cancel</button>
                                                                </div>
                                                            ) : (
                                                                    <div>
                                                                        <Add style={{ float: 'right' }} onClick={() => this.setState({ experience: !this.state.experience })} />
                                                                        <div style={{ fontWeight: 'bold', fontSize: 17 }}> Position </div>
                                                                        <div >Industry Position/Organization</div>
                                                                        <div> YYYY/Mmm YYYY - Present | 0 mo</div>
                                                                        <div>Geolocation (General City/Zone,</div>
                                                                        <div>e.g., Los Angeles, Silicon Valley)</div>
                                                                        <div style={{ paddingTop: '10px' }}> Job Description </div>

                                                                    </div>
                                                                )
                                                        }

                                                    </div>
                                                </div>
                                            </div>

                                            <div style={{ flex: 1, paddingTop: '10px' }}>
                                                <div style={{ display: 'flex', flexDirection: 'row' }}>

                                                    <div style={{ flex: 3 }}>
                                                        Show More
                                            </div>
                                                    <div style={{ flex: 1 }}>
                                                        <ExpandMoreIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>Skills</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <div style={{ flex: 1 }}>
                                                <Add style={{ float: 'right' }} onClick={() => this.setState({ skills: !this.state.skills })} />

                                                <div style={{ borderBottom: '3px solid #a9abad' }}>
                                                    {
                                                        (this.state.skills) ? (
                                                            <input type="text" placeholder='Skill' />

                                                        ) : (
                                                                <div>

                                                                    <span style={{ fontWeight: 'bold', fontSize: 16 }}> Skill </span>
                                                                    | 0 (0 is AVATAR + FULL NAME list industry of endorsers of this skill, if any endorsers)
                                                                    </div>)
                                                    }

                                                </div>
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ borderBottom: '3px solid #a9abad' }}>
                                                    <div style={{ fontWeight: 'bold', fontSize: 16, }}>Skill</div>
                                                    {(this.state.skills) ? (<input type="text" placeholder='Industry/Major' />) : (

                                                        <div>Industry/Major</div>
                                                    )}
                                                </div>
                                                {
                                                    (this.state.skills) ? (<div>

                                                        <button onClick={() => this.setState({ skills: !this.state.skills })}>Save</button>
                                                        <button onClick={() => this.setState({ skills: !this.state.skills })}>Cancel</button>
                                                    </div>) : (null)
                                                }

                                            </div>

                                            <div style={{ display: 'flex', paddingTop: '15px', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                                                <div style={{ flex: 2, marginLeft: '80px' }}>
                                                    Show More
</div>
                                                <div style={{ flex: 1, marginRight: '80px', marginTop: '7px' }}>
                                                    <ExpandMoreIcon />
                                                </div>
                                            </div>
                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>


                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>Referals</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                    <div style={{ flex: 1 }}>
                                                        <img src={profile} alt="..." className={imageClasses} height={60} width={60} />
                                                    </div>
                                                    <div style={{ flex: 2 }}>
                                                        {(this.state.referals) ? (
                                                            <div>
                                                                <input type="text" placeholder='Full name' />
                                                                <input type="text" placeholder='Position' />
                                                                <input type="text" placeholder='Organization' />
                                                                <input type="text" placeholder='Testimony' />
                                                                <button onClick={() => this.setState({ referals: !this.state.referals })}>Save</button>
                                                                <button onClick={() => this.setState({ referals: !this.state.referals })}>Cancel</button>
                                                            </div>

                                                        ) : (
                                                                <div>
                                                                    <Add style={{ float: 'right' }} onClick={() => this.setState({ referals: !this.state.referals })} />

                                                                    <div style={{ fontWeight: 'bold', fontSize: 17 }}> Full Name </div>
                                                                    <div >Position </div>
                                                                    <div> Industry Position/Organization </div>
                                                                    <div> Testimony </div>
                                                                </div>
                                                            )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ flex: 1, paddingTop: '15px' }}>
                                                <div style={{ display: 'flex', flexDirection: 'row' }}>

                                                    <div style={{ flex: 3 }}>
                                                        Show More
                                            </div>
                                                    <div style={{ flex: 1 }}>
                                                        <ExpandMoreIcon />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>


                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>Private: Jobs</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        {(this.state.jobs) ? (
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                {/* <div style={{ flex: 1, borderBottom: '3px solid #a9abad' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                         */}
                                                <input type='input' placeholder='Applied for Position' />
                                                <input type='input' placeholder='Organization, Geolocation' />
                                                <input type='input' placeholder='Recruiter Name, Position' />

                                                {/* <DatePicker
                                                    selected={this.state.startDate}
                                                    onChange={this.handleChange}
                                                /> */}
                                                <input type='input' placeholder='User types in SOURCE' />


                                                {/* </div>
                                                </div> */}
                                                {/* <div style={{ flex: 1, fontSize: '12px' }}> */}
                                                {/* </div> */}
                                                <input type='input' placeholder='Job Description' />

                                                <input type='input' placeholder='FeedBack Recieved' />
                                                <input type='input' placeholder='What I Learned' />
                                                <button onClick={() => this.setState({ jobs: !this.state.jobs })}>Save</button>
                                                <button onClick={() => this.setState({ jobs: !this.state.jobs })}>Cancel</button>

                                                <div >
                                                    <div style={{ display: 'flex', paddingTop: '15px', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                                                        <div style={{ flex: 3, marginLeft: '80px' }}>
                                                            Show More
                                                        </div>
                                                        <div style={{ flex: 1, marginRight: '80px', marginTop: '7px' }}>
                                                            <ExpandMoreIcon />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <div style={{ flex: 1, borderBottom: '3px solid #a9abad' }}>
                                                        <Add style={{ float: 'right' }} onClick={() => this.setState({ jobs: !this.state.jobs })} />

                                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                            <div style={{ flex: 0.5 }}>
                                                                <img src={profile} alt="..." className={imageClasses} height={30} width={30} />
                                                            </div>
                                                            <div style={{ flex: 0.3, marginRight: '4px', marginTop: '2px' }}>
                                                                <ArrowForwardIcon />
                                                            </div>
                                                            <div style={{ flex: 0.5 }}>
                                                                <img src={Microsoft} alt="..." className={imageClasses} height={30} width={30} />
                                                            </div>
                                                            <div style={{ flex: 1 }}>
                                                                <div style={boldHead} >Applied for Position</div>
                                                                <div style={jobFont}>Organization, Geolocation</div>
                                                                <div style={jobFont}>Recruiter Name, Position</div>
                                                            </div>
                                                            <div style={{ flex: 1 }}>
                                                                <div style={jobFont}>
                                                                    Mmm DD YYYY
                                                        </div>
                                                                <div style={jobFont}>
                                                                    at SOURCE
                                                        </div>
                                                                <div style={jobFont}>
                                                                    (User types in SOURCE)
                                                        </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{ flex: 1, fontSize: '12px' }}>
                                                        Job Description
                                            </div>
                                                    <div style={{ flex: 1 }}>
                                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                            <div style={{ flex: 2.5, fontSize: '12px' }}>
                                                                Interview Conference:
                                                 </div>
                                                            <div style={{ flex: 1.3, fontSize: '12px' }}>
                                                                In Person
                                                 </div>
                                                            <div style={{ flex: 0.7, paddingRight: '2px', fontSize: '12px' }}>
                                                                Phone
                                                 </div>
                                                            <div style={{ flex: 0.7, paddingLeft: '2px', fontSize: '12px' }}>
                                                                Video
                                                 </div>
                                                        </div>
                                                    </div>
                                                    <div style={{ flex: 1, fontSize: '12px' }}>
                                                        Feedback Recieved
                                            </div>
                                                    <div style={{ flex: 1, fontSize: '12px' }}>
                                                        What I Learned
                                            </div>
                                                    <div style={{ flex: 1, fontSize: '12px' }}>
                                                        "Thank You" Letter EMAILED to SOURCE  on Mmm DD YYYY
                                            </div>
                                                    <div >
                                                        <div style={{ display: 'flex', paddingTop: '15px', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                                                            <div style={{ flex: 2, marginLeft: '80px' }}>
                                                                Show More
                                                    </div>
                                                            <div style={{ flex: 1, marginRight: '80px', marginTop: '7px' }}>
                                                                <ExpandMoreIcon />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </div>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        )
    }
}

EditableSection.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditableSection);
