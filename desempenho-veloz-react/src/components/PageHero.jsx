export default function PageHero({ eyebrow, title, accent, description, watermark }) {
  return (
    <section className="page-hero" style={{ '--watermark': `"${watermark}"` }}>
      <div className="page-hero-inner">
        <span className="page-pill">{eyebrow}</span>
        <h1>{title}<br /><em>{accent}</em></h1>
        <p>{description}</p>
      </div>
    </section>
  )
}
