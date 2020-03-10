import React from 'react'
import PropTypes from 'prop-types'
import { Article } from 'models/article'

function ArticleCard ({ article }) {
  return (
    <div className="article-card">
      <p>{article.title}</p>
    </div>
  )
}

ArticleCard.prototype.propTypes = {
  article: PropTypes.instanceOf(Article)
}

export default ArticleCard
