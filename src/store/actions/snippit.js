import * as actionTypes from './actionTypes';

export const selectSpecificSnippit = (specificSnippit) => ({
  type: actionTypes.SET_SPECIFIC_SNIPPIT,
  specificSnippit,
});
