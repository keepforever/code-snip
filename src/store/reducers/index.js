import { combineReducers }  from 'redux';
import user from './user';
import snippit from './snippit'
import counter from './counter'
import landingPage from './landingPage'

export default combineReducers({
  user,
  counter,
  snippit,
  landingPage
})

// because we are NOT naming our export, we are free to
// rename this export 'rootReducer' at import in the App.js file.
