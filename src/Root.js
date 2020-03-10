import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import store from 'store'

function Root ({ children, initialState = {} }) {
  return (
    <Provider store={store(initialState)}>
      {children}
    </Provider>
  )
}

Root.prototype.propTypes = {
  children: PropTypes.arrayOf(React.Component),
  initialState: PropTypes.object
}

export default Root
