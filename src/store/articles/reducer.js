import { LOAD_ARTICLES } from './action-types'

const initialState = {
  articles: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_ARTICLES:
      return {
        ...state,
        articles: action.payload
      }
    default:
      return state
  }
}
