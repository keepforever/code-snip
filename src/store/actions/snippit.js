import * as actionTypes from './actionTypes';

export const selectSpecificSnippit = (specificSnippit) => ({
  type: actionTypes.SET_SPECIFIC_SNIPPIT,
  specificSnippit,
});

export const updateBOWAfterCreate = (snippits) => ({
  type: actionTypes.UPDATE_BOW_AFTER_CREATE,
  snippits
});
