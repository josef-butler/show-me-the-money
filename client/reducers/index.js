import {combineReducers} from 'redux'

import auth from './auth'
import dynamicMeeting from './dynamicMeeting'

export default combineReducers({
  auth,
  dynamicMeeting,
})
