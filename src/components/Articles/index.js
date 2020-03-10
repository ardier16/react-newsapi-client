import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadArticles } from 'store/articles/actions'
import { Article } from 'models/article'
import ArticleCard from 'components/ArticleCard'

function Articles ({ articles, loadArticles }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!isLoaded) {
      loadArticles().then(() => setIsLoaded(true))
    }
  }, [isLoaded, loadArticles])

  return (
    <div className="articles">
      {isLoaded
        ? articles.map(article => {
          return <ArticleCard article={article} key={article.url} />
        })
        : 'Loading…'
      }
    </div>
  )
}

Articles.prototype.propTypes = {
  articles: PropTypes.arrayOf(Article),
  loadArticles: PropTypes.func
}

const mapStateToProps = state => ({
  articles: state.articles.articles.map(item => new Article(item))
})

export default connect(
  mapStateToProps,
  { loadArticles }
)(Articles)
