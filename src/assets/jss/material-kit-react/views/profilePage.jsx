import { container, title } from "assets/jss/material-kit-react.jsx";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx";

const profilePageStyle = {
  container,
  card_div: {
    margin: '15px 10px',
    border: '2px solid',
    borderRadius: '10px',
    position: 'relative'
  },
  roundPicDiv: {
    top: '-15px',
    border: '2px solid',
    height: '45px',
    width: '45px',
    borderRadius: '32px',
    position: "absolute",
    left: "-20px",
  },
  cardStyle: {
    width: '100%',
    borderRadius: '10px',
    height: '100px'
  },
  cardText: {
    textAlign: 'center',
    marginTop: '35px',
    fontWeight: 'bold',
    color: 'red'
  },
  img: {
    widths: '25px',
    height: '25px',
    margin: '8px'
  },
  rightSider: {
    marginTop:'15px',
    marginRight:'40px',
    paddingRigh:'15px',
    textAlign:'right'
  }
  ,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  }
};

export default profilePageStyle;
