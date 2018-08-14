import * as actionTypes from '../actions/actionTypes';
import { updateObject, processSnipsForSearch, clearLog } from '../../utils';

const initialState = {
    userInfo:{},
    authToken: ''
};

const updateBOWAfterCreate = (state, action) => {
  // here, action.snippits is snippits
  //console.log('updateBOW action', action)
  const snips = action.snippits
  const snipSoup = processSnipsForSearch(snips)

  return updateObject(state, {
    userInfo: {
      ...state.userInfo,
      snips,
      snipSoup
    }
  })
}

const setUserInfo = ( state, action ) => {
  //clearLog('setUserInfo reducer', action)

  //const token = action.payload.token
  const meta = {
    name: action.payload.user.name,
    email: action.payload.user.email,
    id: action.payload.user.id,
  }
  const snips = action.payload.user.snippits
  const snipSoup = processSnipsForSearch(snips)

  return updateObject(state, {
    userInfo: {
      //token,
      meta,
      snips,
      snipSoup
    }
  })
}

const setUserInfoRefresh = ( state, action ) => {
  //clearLog('setUserInfoRefresh reducer', action)

  //const token = action.payload.token
  const meta = {
    name: action.payload.me.name,
    email: action.payload.me.email,
    id: action.payload.me.id,
  }
  const snips = action.payload.me.snippits
  const snipSoup = processSnipsForSearch(snips)

  return updateObject(state, {
    userInfo: {
      //token,
      meta,
      snips,
      snipSoup
    }
  })
}

// note: we always have a "type" property on any actions passed to reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SET_USER_INFO : return setUserInfo(state, action)
      case actionTypes.SET_USER_INFO_REFRESH : return setUserInfoRefresh(state, action)
      case actionTypes.UPDATE_BOW_AFTER_CREATE : return updateBOWAfterCreate(state, action)
      default: return state;
    }
}

export default reducer;
