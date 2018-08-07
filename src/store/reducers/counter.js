import * as actionTypes from '../actions/actionTypes';
import { updateObject,} from '../../utils';

const initialState = {
    count: 42
};

const incrementCounter = (state, action) => {
  //clearLog('counter reducer', action)
  const newCount = state.count + 1
  return updateObject(state, {
    count: newCount
  })
}

// note: we always have a "type" property on any actions passed to reducer
const reducer = (state=initialState, action) => {
    switch (action.type) {
      case actionTypes.INCREMENT_COUNTER : return incrementCounter(state, action)
      default: return state;
    }
}

export default reducer;
