import * as actionTypes from './actions/actionTypes';
import { combineReducers }  from 'redux';
import snippit from './reducers/snippit'
import user from './reducers/user'

const initialState = {
    counter: 1000
}

const incrementCounter = (state, action) => {
    return {
        counter: state.counter + action.payload
    }
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT_COUNTER: return incrementCounter(state, action)
        default: return state;
    }
}

export default combineReducers({
  reducer,
  snippit,
  user
})
