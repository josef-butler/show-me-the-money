import dynamicReducer from "../../../client/reducers/dynamicMeeting"

test("TICK_ONE_SECOND can increase timeElapsed and save to state", () => {
    // Arrange
    const initialState = {
        timeElapsed: 0,
    }
    const expectedDynamicData = {
        timeElapsed: 1
    }

    const action = {
        type: "TICK_ONE_SECOND",
        cps: 10.50,
    }

    // Act
    const actual = dynamicReducer(initialState, action)

    // Assert
    expect(actual.timeElapsed).toEqual(expectedDynamicData.timeElapsed)
})


test("TICK_ONE_SECOND can save currentTotal to state", () => {
    // Arrange
    const initialState = {
        currentTotal: 0,
    }
    const expectedDynamicData = {
        currentTotal: 10.50
    }

    const action = {
        type: "TICK_ONE_SECOND",
        cps: 10.50,
    }

    // Act
    const actual = dynamicReducer(initialState, action)

    // Assert
    expect(actual.currentTotal).toEqual(expectedDynamicData.currentTotal)
})


test("RESET_TIMER can reset state to zero", () => {
    // Arrange
    const initialState = {
        timeElapsed: 312,
        currentTotal: 23,
    }
    const expectedDynamicData = {
        timeElapsed: 0,
        currentTotal: 0,
    }

    const action = {
        type: "RESET_TIMER",
    }

    // Act
    const actual = dynamicReducer(initialState, action)

    // Assert
    expect(actual).toEqual(expectedDynamicData)
})


