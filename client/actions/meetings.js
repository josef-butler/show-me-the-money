export const RECEIVE_MEETINGS = "RECEIVE_MEETINGS"

import { getMeetings as apiGetMeetings } from "../apis/meetings"

function receiveMeetings(meetings) {
  return {
    type: "RECEIVE_MEETINGS",
    meetings: meetings,
  }
}

export function fetchMeetings() {
  return (dispatch) => {
    apiGetMeetings()
      .then((meetings) => {
        dispatch(receiveMeetings(meetings))
      })
      .catch((err) => {
        console.log("Something went wrong with fetchMeetings action")
      })
  }
}
