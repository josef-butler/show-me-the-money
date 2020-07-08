import { combineReducers } from "redux"

import auth from './auth'
import dynamicMeeting from './dynamicMeeting'
import meetings from "./meetings"

export default combineReducers({
  auth,
  dynamicMeeting,
  meetings,
})
