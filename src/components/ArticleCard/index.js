import React from 'react'
import PropTypes from 'prop-types'
import { Article } from 'models/article'

import './styles.scss'

function ArticleCard ({ article }) {
  return (
    <a
      className="article-card"
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="article-card__img"
        src={article.imageUrl}
        alt={article.title}
      />

      <div className="article-card__info">
        <h4 className="article-card__title">
          {article.title}
        </h4>

        <p className="article-card__desc">
          {article.description}
        </p>
      </div>
    </a>
  )
}

ArticleCard.prototype.propTypes = {
  article: PropTypes.instanceOf(Article)
}

export default ArticleCard
