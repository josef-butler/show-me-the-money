export const TICK_ONE_SECOND = 'TICK_ONE_SECOND'
export const RESET_TIMER = "RESET_TIMER"

export const tickOneSecond = (cps) => {
    return {
        type: TICK_ONE_SECOND,
        cps: cps,
    }
}

export const resetTimer = () => {
    return {
        type: RESET_TIMER,
    }
}