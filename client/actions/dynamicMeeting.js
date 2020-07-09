export const TICK_ONE_SECOND = 'TICK_ONE_SECOND'


export const tickOneSecond = (cps) => {
    console.log('yup')
    return {
        type: TICK_ONE_SECOND,
        cps: cps,
    }
}