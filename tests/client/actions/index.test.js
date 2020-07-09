import {requestLogin} from '../../../client/actions/auth'
import jest from 'jest'
import {addStaticData} from '../../../client/actions/staticActions'
import {ADD_STATE} from '../../../client/actions/staticActions'

test('Login request', () => {
  // Arrange
  const expectedType  = 'LOGIN_REQUEST'

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