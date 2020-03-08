import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadArticles } from 'store/articles/actions'

import Search from 'components/Search'
import Articles from 'components/Articles'
import Footer from 'components/Footer'

import './styles.scss'

function App ({ articles, loadArticles }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!isLoaded) {
      loadArticles().then(() => setIsLoaded(true))
    }
  }, [isLoaded, loadArticles])

  return (
    <div className="app">
      <div className="app__main">
        <Search />
        <Articles />
        <code>{isLoaded ? JSON.stringify(articles, 2) : 'Loading…'}</code>
      </div>

      <Footer />
    </div>
  )
}

App.prototype.propTypes = {
  articles: PropTypes.array,
  loadArticles: PropTypes.func
}

const mapStateToProps = state => ({
  articles: state.articles.articles
})

export default connect(
  mapStateToProps,
  { loadArticles }
)(App)
