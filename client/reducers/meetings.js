import { RECEIVE_MEETINGS } from "../actions/meetings"

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MEETINGS:
      return action.meetings
    default:
      return state
  }
}

export default reducer