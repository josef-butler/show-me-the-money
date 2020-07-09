// Attendees, Meeting Name, Start Time, $ per Second
import {ADD_STATE} from '../actions/staticActions'
// import ADD_ATTENDEE from '../actions/staticActions'


let initialState = {
    attendees: [],
    meetingName: "",
    startTime: "",
    costPerSecond: "0.0"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_MTG_NAME:
        //     return [...state, action.meetingName]
        // case ADD_ATTENDEE:
        //     return [...state, state.attendees.push(action.attendee)]
        // case ADD_START_TIME:
        //     return [...state, action.startTime]
        // case ADD_COST_PER_SECOND:
        //     return [...state, action.costPerSecond]
        case ADD_STATE:
            // console.log('here', action)
            return action.data
        default:
            return state
    }
}

export default reducer
