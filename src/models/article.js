import _get from 'lodash/get'

export class Article {
  constructor (raw) {
    this.title = raw.title
    this.description = raw.description
    this.content = raw.content

    this.url = raw.url
    this.imageUrl = raw.urlToImage

    this.author = raw.author || ''
    this.publishedAt = new Date(raw.publishedAt)

    this.sourceId = _get(raw, 'source.id') || ''
    this.sourceName = _get(raw, 'source.name') || ''
  }
}
