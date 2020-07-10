import { requestLogin } from '../../../client/actions/auth'
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

test('addStaticData action works', () => {
  const expected = {
    type: ADD_STATE,
    data: 'I AM SENTIENT DATA'
  }
  let actual = addStaticData('I AM SENTIENT DATA')
  expect(actual).toEqual(expected)
})

test('tickOneSecond action works', () => {
  const expected = {
    type: TICK_ONE_SECOND,
    cps: "FREEEEE MEEEEE",
  }
  let actual = tickOneSecond("FREEEEE MEEEEE")
  expect(actual).toEqual(expected)
})

test('receiveMeetings action works', () => {
  const expected = {
    type: RECEIVE_MEETINGS,
    meetings: 'I CANT FEEL MY TOES!',
  }
  let actual = receiveMeetings('I CANT FEEL MY TOES!')
  expect(actual).toEqual(expected)
})




// const apiGetMeetings = jest.fn(() => Promise.resolve([]))

// // const receiveMeetings = jest.fn()

// test("apiGetMeetings works in thunk", () => {
//   const fakeDispatch = jest.fn()
//   const expected = 1

//   getMeetings()(fakeDispatch)
//   expect(fakeDispatch).toHaveBeenCalled()
// })


// // =======thunk========
// export function getMeetings() {
//   return (dispatch) => {
//   apiGetMeetings()
//   .then(meetings => {
//     console.log(meetings)
//         dispatch()
//       })
//       .catch((err) => {
//         console.log("Error on getMeetings in /actions")
//       })
//   }
// }
