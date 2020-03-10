import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadArticles } from 'store/articles/actions'
import { Article } from 'models/article'

function Articles ({ articles, loadArticles }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!isLoaded) {
      loadArticles().then(() => setIsLoaded(true))
    }
  }, [isLoaded, loadArticles])

  return (
    <div className="articles">
      <code>{isLoaded ? JSON.stringify(articles, 2) : 'Loading…'}</code>
    </div>
  )
}

Articles.prototype.propTypes = {
  articles: PropTypes.array,
  loadArticles: PropTypes.func
}

const mapStateToProps = state => ({
  articles: state.articles.articles.map(item => new Article(item))
})

export default connect(
  mapStateToProps,
  { loadArticles }
)(Articles)
