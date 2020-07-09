import React from "react"
import { shallow } from "enzyme"

import { History } from "../../../client/components/History"

jest.mock("../../../client/apis/meetings", () => ({
  getMeeting: () => Promise.resolve({}),
}))

test("History page displays Attendees", () => {
  const meetings = [{ meeting_id: 1, meeting_name: "test" }]
  // Arrange
  const expected = 0

  // Act
  const wrapper = shallow(
    <History
      auth={{ isAuthenticated: true }}
      dispatch={() => {}}
      meetings={meetings}
      match={{ params: { id: 1 } }}
    />
  )
  wrapper.setState({
    attendees: [
      { id: 1, first_name: "ben", last_name: "pong" },
      { id: 2, first_name: "joe", last_name: "hodgepodge" },
    ],
  })
  // wrapper.setState({params:params})
  const actual = wrapper.find("li").length

  // Assert
  expect(actual).toBeGreaterThan(expected)
})
