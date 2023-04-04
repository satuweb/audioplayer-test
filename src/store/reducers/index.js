import { combineReducers } from 'redux'
import { soundsReducer } from './sounds'
import { searchReducer } from './search'
import { playReducer } from './play'

const rootReducer = combineReducers({
    soundsReducer,
    searchReducer,
    playReducer
})

export default rootReducer