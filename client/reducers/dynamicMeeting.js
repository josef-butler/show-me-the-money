import { TICK_ONE_SECOND } from "../actions/dynamicMeeting"

const initialState = {
    currentTotal: 0,
    timeElapsed: 0,
}

function reducer(state = initialState, action) {
    switch (action.type) {
      case TICK_ONE_SECOND:
          state.timeElapsed++
          state.currentTotal += action.cps
        return state
      default:
        return state
    }
  }
  
  export default reducer