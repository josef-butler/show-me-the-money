
export const ADD_STATE = 'ADD_STATE'
export const ADD_ATTENDEE = 'ADD_ATTENDEE'


export function addStaticData (data){
    console.log("action", data)
    // data.startTime = new Date().toLocaleString()
    return {
        type: ADD_STATE,
        data:data
    }
}

// export function addAttendee (name, wage){
//     return {
//         type: ADD_ATTENDEE,
//         attendee: {
//             name: name,
//             hourlyWage: wage,
//         },
//     }
// }

