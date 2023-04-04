import * as actionTypes from "./actionTypes"

export const initSearch = () => {
  return {
    type: actionTypes.SEARCH_INIT_SEARCH
  }
}

export const updateSearch = (params) => {
  return {
    type: actionTypes.SEARCH_UPDATE_SEARCH,
    searchParams: params
  }
}
