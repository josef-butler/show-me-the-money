import React from 'react'
import { shallow } from 'enzyme'

import { Meeting } from '../../../client/components/Meeting'

test('Pause button is hidden before meeeting start', () => {

  const expected = "Start"

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
  const actual = wrapper.find('button').first().text()

  
  expect(actual).toEqual(expected)
})


test('Pause button exists after meeting start', () => {

  const expected = "Pause"

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
  const actual = wrapper.find('button').first().text()

  
  expect(actual).toEqual(expected)
})

