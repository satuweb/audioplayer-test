import * as actionTypes from "./actionTypes"

export const playSoundStart = () => {
  return {
    type: actionTypes.PLAY_SOUND_START
  }
}

export const playSoundSuccess = (data) => {
  return {
    type: actionTypes.PLAY_SOUND_SUCCESS,
    track: data
  }
}

export const playSoundFail = (error) => {
  return {
    type: actionTypes.PLAY_SOUND_FAIL,
    error: error
  }
}

export const playSound = (id) => {
  return {
    type: actionTypes.PLAY_SOUND,
    id: id
  }
}
