import React from 'react'
import './styles.scss'

function Footer () {
  return (
    <footer className="footer">
      <p className="footer__powered">
        <span className="footer__powered-txt">Powered by </span>
        <a
          className="footer__powered-link"
          href="https://newsapi.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          NewsApi.org
        </a>
      </p>
    </footer>
  )
}

export default Footer
