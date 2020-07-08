import meetingsReducer from "../../../client/reducers/meetings"

test("RECEIVE_MEETINGS can get meetings and set to state", () => {
  // Arrange
  const initialState = []
  const expectedMeetingsData = [
    {
      id: 1,
      meeting_name: "firstMeeting",
      time: "2020-07-08 11:03:21",
      duration: 600,
      attendees: ["Gerry", "Mary", "Berry"],
      cost: 486.45,
    },
    {
      id: 2,
      meeting_name: "secondMeeting",
      time: "2020-07-08 11:31:11",
      duration: 610,
      attendees: ["Jim", "Johnny", "Jinx"],
      cost: 476.41,
    },
  ]

  const action = {
    type: "RECEIVE_MEETINGS",
    meetings: expectedMeetingsData,
  }

  // Act
  const actual = meetingsReducer(initialState, action)

  // Assert
  expect(actual).toEqual(expectedMeetingsData)
})
