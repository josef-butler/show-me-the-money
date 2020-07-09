import staticReducer from "../../../client/reducers/Static"

test("ADD_STATE can get static data and set to state", () => {
    // Arrange
    const initialState = {}
    const expectedStaticData = {
        attendees: [{
            name: "Rose",
            hourlyWage: 25
        },
        {
            name: "Rose",
            hourlyWage: 25
        }],
    
        meetingName: "Party",
        startTime: "09/07/2020, 20:45:06",
        costPerSecond: 12
    }

    const action = {
        type: "ADD_STATE",
        data: expectedStaticData,
    }

    // Act
    const actual = staticReducer(initialState, action)

    // Assert
    expect(actual).toEqual(expectedStaticData)
})
