import request from "superagent"
import { getEncodedToken } from "authenticare/client"

const getAuthorizationHeader = () => ({
  Authorization: `Bearer ${getEncodedToken()}`,
})

const acceptJsonHeader = { Accept: "application/json" }

export function getMeetings() {
  return request
    .get("/api/meetings")
    .then((res) => res.body)
    .catch((err) =>
      console.log("Something went wrong on receiveMeetings api call")
    )
}
