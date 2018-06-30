import { container } from "assets/jss/material-kit-react.jsx";

const ConnectionPageStyle = {
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
        height: '300px'
    },
    cardText: {
        textAlign: 'center',
        marginTop: '35px',
        fontWeight: 'bold',
        color: 'red'
    },
    expansionPanel: {
        marginTop: '35px',
        width: '40%',
        float: 'right',
        marginRight: '20px',
        boxShadow: 'none',
        '& div':{
            padding:'0px',
            fontWeight:'bold',
            paddingLeft:'10px'
        }
    },
};

export default ConnectionPageStyle;
