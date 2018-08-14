import * as actionTypes from './actionTypes';

export const setUserInfo = (payload) => ({
  type: actionTypes.SET_USER_INFO,
  payload,
});

export const setUserInfoRefresh = (payload) => ({
  type: actionTypes.SET_USER_INFO_REFRESH,
  payload,
});
