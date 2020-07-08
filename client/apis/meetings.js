import request from "superagent"
import { getEncodedToken } from "authenticare/client"

const getAuthorizationHeader = () => ({
  Authorization: `Bearer ${getEncodedToken()}`,
})

const rootUrl = '/api/meetings'
const acceptJsonHeader = { Accept: "application/json" }

export function getMeetings() {
  return request
    .get(rootUrl)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader)
    .then((res) => res.body)
    .catch((err) =>
      console.log("Error on getMeetings in /apis")
    )
}