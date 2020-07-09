import { requestLogin } from '../../../client/actions/auth'
import jest from 'jest'
import { addStaticData } from '../../../client/actions/staticActions'
import { ADD_STATE } from '../../../client/actions/staticActions'
import { tickOneSecond } from '../../../client/actions/dynamicMeeting'
import { TICK_ONE_SECOND } from '../../../client/actions/dynamicMeeting'
import { RECEIVE_MEETINGS } from '../../../client/actions/meetings'
import { receiveMeetings } from '../../../client/actions/meetings'

test('Login request', () => {
  // Arrange
  const expectedType = 'LOGIN_REQUEST'

  // Act
  const actual = requestLogin()

  // Assert
  expect(actual).toHaveProperty('type')
  expect(actual).toHaveProperty('isFetching')
  expect(actual).toHaveProperty('isAuthenticated')

  expect(actual.type).toEqual(expectedType)
})

test('Jest is working', () => {
  expect(8).toEqual(8)
})

test('Add StaticData action works', () => {
  const expected = {
    type: ADD_STATE,
    data: 'I AM SENTIENT DATA'
  }
  let actual = addStaticData('I AM SENTIENT DATA')
  expect(actual).toEqual(expected)
})

test('Tick one second action works', () => {
  const expected = {
    type: TICK_ONE_SECOND,
    cps: "FREEEEE MEEEEE",
  }
  let actual = tickOneSecond("FREEEEE MEEEEE")
  expect(actual).toEqual(expected)
})

test('ReceiveMeetings action works', () => {
  const expected = {
    type: RECEIVE_MEETINGS,
    meetings: 'I CANT FEEL MY TOES!',
  }
  let actual = receiveMeetings('I CANT FEEL MY TOES!')
  expect(actual).toEqual(expected)
})