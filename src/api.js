import NewsApi from 'newsapi'

let _api = null

export function initApi (apiKey) {
  if (!apiKey) {
    throw new Error('API key is not provided')
  }

  _api = new NewsApi(apiKey)
}

export function api () {
  if (!_api) {
    throw new Error('API is not initialized')
  } else {
    return _api
  }
}
