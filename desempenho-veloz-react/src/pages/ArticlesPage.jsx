import { useMemo, useState } from 'react'
import ArticleModal from '../components/ArticleModal'
import PageHero from '../components/PageHero'
import { CategoryIcon } from '../data/categoryIcons'
import { articleCategories, articles } from '../data/articles'

export default function ArticlesPage() {
  const [category, setCategory] = useState('Todos')
  const [selectedArticle, setSelectedArticle] = useState(null)
  const featured = articles.find((article) => article.featured)
  const filtered = useMemo(() => articles.filter((article) => !article.featured && (category === 'Todos' || article.category === category || article.tags.includes(category))), [category])

  return (
    <>
      <PageHero eyebrow="Dicas & Manutenção" title="Artigos &" accent="dicas úteis" description="Conselhos práticos dos nossos especialistas para cuidar melhor do seu automóvel." watermark="ARTIGOS" />
      <div className="filters-bar" role="group" aria-label="Filtrar artigos">
        {articleCategories.map((item) => <button className={`filter-btn ${category === item ? 'active' : ''}`} type="button" key={item} onClick={() => setCategory(item)}>{item}</button>)}
      </div>

      {category === 'Todos' && <div className="featured-wrap"><article className="featured-card" onClick={() => setSelectedArticle(featured)}><div className="featured-img"><CategoryIcon category={featured.category} /></div><div className="featured-body"><span className="feat-pill">Em Destaque</span><div className="feat-meta">{featured.tags.join(' · ')} · {featured.readingTime}</div><h2>{featured.cardTitle}</h2><p>{featured.excerpt}</p><button className="read-btn" type="button">Ler Artigo →</button></div></article></div>}

      <section className="articles-section"><div className="articles-inner"><span className="section-pill">{category === 'Todos' ? 'Todos os artigos' : category}</span><h2 className="articles-heading">Mais para <em>ler</em></h2>
        <div className="articles-grid">
          {filtered.map((article) => <article className="article-card article-button" key={article.id} onClick={() => setSelectedArticle(article)}><div className="article-img"><CategoryIcon category={article.category} /></div><div className="article-body"><div className="article-tags">{article.tags.map((tag) => <span className="article-tag" key={tag}>{tag}</span>)}</div><div className="article-title">{article.title}</div><div className="article-excerpt">{article.excerpt}</div><div className="article-footer"><span>{article.readingTime}</span><span className="article-read">Ler →</span></div></div></article>)}
        </div>
        {filtered.length === 0 && <p className="empty-state">Ainda não existem artigos nesta categoria.</p>}
      </div></section>
      <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </>
  )
}
