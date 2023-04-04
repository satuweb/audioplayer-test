import { put } from 'redux-saga/effects'
import axios from '../../fetchData/axios-records'
import * as actions from '../actions/index'

export function* fetchSoundsSaga({ params, page }) {
    yield put(actions.fetchSoundsStart())

    try {
        const response = yield axios.get(`search/text/?query=${params}&page=${page || 1}`)
        const soundsResponse = response.data
        yield put(actions.fetchSoundsSuccess(soundsResponse))

    } catch (error) {
        yield put(actions.fetchSoundsFail(error))
    }

}