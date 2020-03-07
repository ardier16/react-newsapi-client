import React from 'react'

import Search from 'components/Search'
import Articles from 'components/Articles'
import Footer from 'components/Footer'

import './styles.scss'

function App () {
  return (
    <div className="app">
      <div className="app__main">
        <Search />
        <Articles />
      </div>

      <Footer />
    </div>
  )
}

export default App
