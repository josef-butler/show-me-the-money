export const TICK_ONE_SECOND = 'TICK_ONE_SECOND'


export const tickOneSecond = (cps) => {
    return {
        type: TICK_ONE_SECOND,
        cps: cps,
    }
}