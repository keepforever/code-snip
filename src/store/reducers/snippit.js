import * as actionTypes from '../actions/actionTypes';
import { updateObject, clearLog } from '../../utils';

const initialState = {
    snippits: ['test'],
    specificSnippit:{
      hello: 'world'
    }
};

const setSpecificSnippit = (state, action) => {
  clearLog("setSpecificSnippit(),  snippit.js reducer", 'xxxx')
  // return updateObject(state, {
  //   specificSnippit: action.specificSnippit
  // })
}

// note: we always have a "type" property on any actions passed to reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SET_SPECIFIC_SNIPPIT : return setSpecificSnippit(state, action)
      default: return state;
    }
}

export default reducer;

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionTypes.PURCHASE_INIT: return purchaseInit(state, action)
//         default: return state;
//     }
// }
