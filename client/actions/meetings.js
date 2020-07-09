export const RECEIVE_MEETINGS = "RECEIVE_MEETINGS"

import { getMeetings as apiGetMeetings } from "../apis/meetings"

function receiveMeetings(meetings) {
  return {
    type: "RECEIVE_MEETINGS",
    meetings: meetings,
  }
}

export function getMeetings() {
  return (dispatch) => {
    apiGetMeetings()
      .then(meetings => {
        dispatch(receiveMeetings(meetings))
      })
      .catch((err) => {
        console.log("Error on getMeetings in /actions")
      })
  }
}