
export const ADD_STATE = 'ADD_STATE'



export function addStaticData (data){
    data.startTime = new Date().toLocaleString()
    return {
        type: ADD_STATE,
        data:data
    }
}

