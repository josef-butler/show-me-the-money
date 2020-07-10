// Attendees, Meeting Name, Start Time, $ per Second
import {ADD_STATE} from '../actions/staticActions'
// import ADD_ATTENDEE from '../actions/staticActions'


let initialState = {
    attendees: [],
    meetingName: "",
    minutes:"",
    startTime: "",
    costPerSecond: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STATE:
            return action.data
        default:
            return state
    }
}

export default reducer
