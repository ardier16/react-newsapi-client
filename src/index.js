import React from 'react'
import ReactDOM from 'react-dom'

import App from 'components/App'
import './index.css'

import { initApi } from './api'
import { config } from 'config'

initApi(config.API_KEY)

ReactDOM.render(<App />, document.getElementById('root'))
