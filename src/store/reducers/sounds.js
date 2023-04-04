import * as actionTypes from '../actions/sounds/actionTypes'

const initState = {
    sounds: [],
    loading: false
}
export const soundsReducer = (state = initState, action) => {
    switch (action.type) {

        case actionTypes.FETCH_SOUNDS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_SOUNDS_SUCCESS:
            return {
                ...state,
                sounds: action.sounds,
                total: action.total,
                loading: false
            }
        case actionTypes.FETCH_SOUNDS_FAIL:
            return {
                ...state,
                loading: false
            }
        

        default:
            return state
    }
}