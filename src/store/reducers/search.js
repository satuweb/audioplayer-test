import * as actionTypes from '../actions/search/actionTypes'

const initState = {
    params: '',
}
export const searchReducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.SEARCH_INIT_SEARCH:
            return {
                ...initState
            }
        case actionTypes.SEARCH_UPDATE_SEARCH:
            return {
                ...state,
                params: action.searchParams.params
            }
        default:
            return state
    }
}