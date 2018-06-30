import {
  SHOW_LOADER,
  HIDE_LOADER
} from "./../constants/ActionTypes";


// Toggle Loader
export function toggleLoader(show) {
  return function (dispatch) {
    if (show) {
      dispatch({
        type: SHOW_LOADER
      })
    }
    else {
      dispatch({
        type: HIDE_LOADER
      })
    }

  }
}
