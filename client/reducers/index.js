import { combineReducers } from "redux"

import auth from './auth'
import dynamic from './dynamicMeeting'
import meetings from "./meetings"
import staticReducer from './Static'

export default combineReducers({
  auth,
  dynamic,
  meetings,
  staticReducer
})
