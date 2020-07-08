// Attendees, Meeting Name, Start Time, $ per Second
import ADD_STATE from '../actions/staticActions'



initialState = {
    attendees: [],
    meetingName: "",
    startTime: new Date().toLocaleString(),
    costPerSecond: "0.0"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_MTG_NAME:
        //     return [...state, action.meetingName]
        // case ADD_ATTENDEES:
        //     return [...state, action.attendees]
        // case ADD_START_TIME:
        //     return [...state, action.startTime]
        // case ADD_COST_PER_SECOND:
        //     return [...state, action.costPerSecond]
        case ADD_STATE:
            return [...action]
        default:
            return state
    }
}

export default reducer
