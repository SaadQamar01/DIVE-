import { container } from "assets/jss/material-kit-react.jsx";

const DiscoverPageStyle = {
    root: {
        upperCardStyle: {
            height: '90px',
            borderRadius: '10px',
            padding: '20px 40px'
        },
        lowerCardStyle: {
            height: '400px',
            marginTop: '20px',
            borderRadius: '10px',
            padding: '20px 40px'
        }
    },
    mRoot: {
        extend:'root'
    }
};

export default DiscoverPageStyle;
