import { combineReducers }  from 'redux';
import user from './user';
import snippit from './snippit'
import counter from './counter'

export default combineReducers({
  user,
  counter,
  snippit,
})

// because we are NOT naming our export, we are free to
// rename this export 'rootReducer' at import in the App.js file.
