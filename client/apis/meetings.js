import request from "superagent"
import { getEncodedToken } from "authenticare/client"

const getAuthorizationHeader = () => ({
  Authorization: `Bearer ${getEncodedToken()}`,
})

const rootUrl = '/api/v1/meetings'
const acceptJsonHeader = { Accept: "application/json" }

export function getMeetings() {
  return request
    .get(rootUrl)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .then((res) => res.body)
    .catch((err) =>
      console.log("Error on getMeetings in /apis")
    )
}
export function getAll() {
  return request
    .get(rootUrl + "/all")
    .then((res) => res.body)
    .catch((err) =>
      console.log("Error on getMeetings in /apis")
    )
}

export function getMeeting(id) {
  return request
    .get(`${rootUrl}/${id}/users`)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .then((res) => res.body.data)
    .catch((err) =>
      console.log("Error on getMeeting in /apis")
    )
}
