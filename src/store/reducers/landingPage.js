import * as actionTypes from '../actions/actionTypes';
import { updateObject, clearLog } from '../../utils';

const initialState = {
    showLandingPage: true
};

const toggleLandingPage = (state, action) => {
  clearLog('toggleLandingPage reducer', action)
  const currentLandingStatus = state.showLandingPage
  return updateObject(state, {
    showLandingPage: !currentLandingStatus
  })
}

// note: we always have a "type" property on any actions passed to reducer
const reducer = (state=initialState, action) => {
    switch (action.type) {
      case actionTypes.TOGGLE_LANDING_PAGE : return toggleLandingPage(state, action)
      default: return state;
    }
}

export default reducer;
