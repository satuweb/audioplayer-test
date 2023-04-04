import * as actionTypes from "./actionTypes"

export const fetchSoundsStart = () => {
  return {
    type: actionTypes.FETCH_SOUNDS_START
  }
}

export const fetchSoundsSuccess = (data) => {
  return {
    type: actionTypes.FETCH_SOUNDS_SUCCESS,
    sounds: data.results,
    total: data.count
  }
}

export const fetchSoundsFail = (error) => {
  return {
    type: actionTypes.FETCH_SOUNDS_FAIL,
    error: error
  }
}

export const fetchSounds = (params, page) => {
  return {
    type: actionTypes.FETCH_SOUNDS,
    params: params,
    page: page
  }
}
