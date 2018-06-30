import React, { Component } from 'react';
import reducers from './reducers';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './app'

const composeEnhancers = compose;
const store = createStore(
    reducers, /* preloadedState, */
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeEnhancers(applyMiddleware(thunk))

);
store.subscribe(() => {
    console.log(store.getState(), "store value")
})

class Root extends Component {


    componentDidMount() {
        // console.log("did mount")
    }

    componentWillMount() {
    }




    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
export default Root;
