import { combineReducers } from "redux"

<<<<<<< HEAD
import auth from './auth'
import dynamicMeeting from './dynamicMeeting'
||||||| 6626c46
import auth from './auth'
=======
import auth from "./auth"
import meetings from "./meetings"
>>>>>>> aab297dd16c01148aa57dc02ded172659ec0d81d

export default combineReducers({
<<<<<<< HEAD
  auth,
  dynamicMeeting,
||||||| 6626c46
  auth
=======
  auth,
  meetings,
>>>>>>> aab297dd16c01148aa57dc02ded172659ec0d81d
})
