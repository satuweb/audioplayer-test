import * as actionTypes from '../actions/play/actionTypes'

const initState = {
    id: null,
    track: {},
    playing: false
}
export const playReducer = (state = initState, action) => {
    switch (action.type) {

        case actionTypes.PLAY_SOUND_START:
            return {
                ...state,
                playing: false
            }
        case actionTypes.PLAY_SOUND_SUCCESS:
            return {
                ...state,
                id: action.id,
                track: action,
                playing: true
            }
        case actionTypes.PLAY_SOUND_FAIL:
            return {
                ...state,
                playing: false
            }
        

        default:
            return state
    }
}