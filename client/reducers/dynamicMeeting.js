import { TICK_ONE_SECOND } from "../actions/dynamicMeeting"

const initialState = {
    currentTotal: 0,
    timeElapsed: 0,
}

// const attendees = [{
//   name: 'Lawrence',
//   hourly: 24,
// }, {
//   name: 'Gilbert',
//   hourly: 28.20,
// }, {
//   name: 'Ruth',
//   hourly: 30.60,
// }]

// function cpsCalc() {
//   let cph = 0
//   attendees.map((element) => {
//     cph += element.hourly
//   })
//   console.log(cph)
// }


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