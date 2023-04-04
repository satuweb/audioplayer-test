import { takeEvery } from 'redux-saga/effects'
import { fetchSoundsSaga } from './sounds'
import { playSoundSaga } from './play'
import * as actionTypesSounds from '../actions/sounds/actionTypes'
import * as actionTypesPlay from '../actions/play/actionTypes'

export function* watchSounds() {
    yield takeEvery(actionTypesSounds.FETCH_SOUNDS, fetchSoundsSaga)
    yield takeEvery(actionTypesPlay.PLAY_SOUND, playSoundSaga)
}

