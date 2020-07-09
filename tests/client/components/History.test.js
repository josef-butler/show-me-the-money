import React from 'react'
import { shallow } from 'enzyme'

import { History } from '../../../client/components/History'


test('History page displays Attendees', () => {

  const meetings = []
  // Arrange
  const expected = 4
  // expect the li to not be null
  
  // Act
  const wrapper = shallow(<History auth={{isAuthenticated: true}} dispatch={() => {}} meetings={meetings}/>)
  const actual = wrapper.find('Route').length

  // Assert
  expect(actual).toEqual(expected)
})