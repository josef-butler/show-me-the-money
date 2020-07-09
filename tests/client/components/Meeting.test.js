import React from 'react'
import { shallow } from 'enzyme'

import { Meeting } from '../../../client/components/Meeting'


test('Create meeting button takes you to meeting page', () => {
  // Arrange
  const expected = 4

  // Act
  const wrapper = shallow(<Meeting auth={{isAuthenticated: true}} dispatch={() => {}}/>)
  const actual = wrapper.find('Route').length

  // Assert
  expect(actual).toEqual(expected)
})


test('Pause button exists when it needs to', () => {

  const staticReducer = {
    attendees: [],
    meetingName: "",
    startTime: "",
    costPerSecond: "0.0"
}

  const dynamic= {
  currentTotal: 0,
  timeElapsed: 0,
}

  const wrapper = shallow(<Meeting auth={{isAuthenticated: true}} dispatch={() => {}} staticReducer={staticReducer} dynamic={dynamic}/>)
  wrapper.setState({meeting:false})
  expect(wrapper.find('Pause').exists()).toBeFalsy()
})


test('Pause button does not exists when it needs to', () => {

  const staticReducer = {
    attendees: [],
    meetingName: "",
    startTime: "",
    costPerSecond: "0.0"
}

  const dynamic= {
  currentTotal: 0,
  timeElapsed: 0,
}

  const wrapper = shallow(<Meeting auth={{isAuthenticated: true}} dispatch={() => {}} staticReducer={staticReducer} dynamic={dynamic}/>)
  wrapper.setState({meeting:true})
  expect(wrapper.find('Pause').exists()).toBeTruthy()
})

