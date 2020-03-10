import { LOAD_ARTICLES } from './action-types'
import { api } from 'api'

export const loadArticles = () => async dispatch => {
  const { articles } = await api().v2.everything({ q: 'football' })

  return dispatch({
    type: LOAD_ARTICLES,
    payload: articles
  })
}
