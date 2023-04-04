import { put } from 'redux-saga/effects'
import axios from '../../fetchData/axios-records'
import * as actions from '../actions/index'

export function* playSoundSaga({ id }) {
    
    yield put(actions.playSoundStart())

    try {
        const response = yield axios.get(`sounds/${id}/`)
        const playResponse = response.data
        yield put(actions.playSoundSuccess(playResponse))

    } catch (error) {
        yield put(actions.playSoundFail(error))
    }

}