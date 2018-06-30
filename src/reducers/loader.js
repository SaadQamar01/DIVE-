import {
  SHOW_LOADER,
  HIDE_LOADER
} from "./../constants/ActionTypes";

import initialState from '../store/initialState';


const loader_reducer = (state = initialState.isLoading, action) => {
  switch (action.type) {


    /* LOADER ACTIONS */

    case SHOW_LOADER:
      console.log(SHOW_LOADER);
      return true

    case HIDE_LOADER:
      console.log(HIDE_LOADER);
      return false

    default:
      return state

  }

}


export default loader_reducer;
