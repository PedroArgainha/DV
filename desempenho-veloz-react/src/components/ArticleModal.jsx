import { useEffect } from 'react'
import { CategoryIcon } from '../data/categoryIcons'

export default function ArticleModal({ article, onClose }) {
  useEffect(() => {
    if (!article) return undefined
    const onKeyDown = (event) => event.key === 'Escape' && onClose()
    document.body.classList.add('modal-open')
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [article, onClose])

  if (!article) return null

  return (
    <div className="modal-overlay open" onMouseDown={(event) => event.target === event.currentTarget && onClose()} role="presentation">
      <article className="article-modal" role="dialog" aria-modal="true" aria-labelledby="article-modal-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Fechar artigo">✕</button>
        <div className="modal-hero"><CategoryIcon category={article.category} /></div>
        <div className="modal-body">
          <span className="modal-pill">{article.tags.join(' · ')}</span>
          <h2 id="article-modal-title">{article.title}</h2>
          <div className="modal-meta">{article.readingTime}</div>
          <div className="modal-content">
            {article.sections.map((section, index) => {
              if (section.type === 'h3') return <h3 key={index}>{section.text}</h3>
              if (section.type === 'list') return <ul key={index}>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
              return <p key={index}>{section.text}</p>
            })}
          </div>
        </div>
      </article>
    </div>
  )
}
