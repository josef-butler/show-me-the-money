import { TICK_ONE_SECOND, RESET_TIMER } from "../actions/dynamicMeeting"


const initialState = {
    currentTotal: 0,
    timeElapsed: 0,
}

function reducer(state = initialState, action) {
    switch (action.type) {
      case TICK_ONE_SECOND:
          state.timeElapsed++
          state.currentTotal += Number(action.cps)
        return state
      case RESET_TIMER:
        state.timeElapsed = 0
        state.currentTotal = 0
        return state
      default:
        return state
    }
  }
  
  export default reducer