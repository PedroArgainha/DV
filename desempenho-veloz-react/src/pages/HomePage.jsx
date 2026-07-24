import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ImageSlot from '../components/ImageSlot'
import { IconBattery, IconBox, IconCheck, IconChevronLeft, IconChevronRight, IconCoin, IconDroplet, IconFilter, IconShieldCheck, IconStar, IconThermometer, IconWrench } from '../components/Icons'

const brands = [
  ['MO', 'Motul', 'Tecnologia francesa de referência em lubrificantes de alta performance'],
  ['LM', 'Liqui-Moly', 'Óleos e lubrificantes alemães para máxima proteção do motor'],
  ['MN', 'Mannol', 'Lubrificantes fiáveis com excelente relação qualidade-preço'],
  ['CT', 'Castrol', 'Óleos preparados para todas as condições de condução'],
]

const products = [
  [<IconDroplet key="i" />, 'Óleos', 'Castrol Edge 5W-30', 'Óleo sintético para motores modernos', '/images/produtos/oleo-liquimoly.jpg'],
  [<IconDroplet key="i" />, 'Óleos', 'Mannol LongLife 5W-30', 'Tecnologia de força fluida para máximo desempenho', '/images/produtos/oleo-castrol.jpg'],
  [<IconWrench key="i" />, 'Travões', 'Discos e Pastilhas', 'Travagem precisa para todas as condições', '/images/produtos/travoes.jpg'],
  [<IconFilter key="i" />, 'Filtros', 'Filtros de Ar & Óleo', 'Motor limpo com filtração de alta eficiência', '/images/produtos/filtros.jpg'],
  [<IconBattery key="i" />, 'Baterias', 'Baterias', 'Arranque fiável com garantia de qualidade', '/images/produtos/baterias.jpg'],
  ]

// Fotos da hero em slide — coloque os ficheiros em public/images/loja/
// com estes nomes. Pode ter mais do que 4, é só acrescentar à lista.
const heroPhotos = [
  '/images/loja/slide-1.jpg',
  '/images/loja/slide-2.jpg',
  '/images/loja/slide-3.jpg',
  '/images/loja/slide-4.jpg',
]

function HeroSlideshow() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const first = heroPhotos[index % heroPhotos.length]
  const second = heroPhotos[(index + 1) % heroPhotos.length]

  const showPrevious = () => {
    setIndex((value) => (value - 1 + heroPhotos.length) % heroPhotos.length)
  }

  const showNext = () => {
    setIndex((value) => (value + 1) % heroPhotos.length)
  }

  useEffect(() => {
    if (paused || heroPhotos.length < 2) return undefined

    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % heroPhotos.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [paused])

  return (
    <div
      className="hero-slide"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-label="Galeria de fotografias da loja"
    >
      <div className="hero-slide-img hero-slide-img-main">
        <ImageSlot src={first} alt="Loja Desempenho Veloz" className="hero-slide-photo" label={first.split('/').pop()} />
      </div>
      <div className="hero-slide-img hero-slide-img-secondary">
        <ImageSlot src={second} alt="Loja Desempenho Veloz" className="hero-slide-photo" label={second.split('/').pop()} />
      </div>

      <button type="button" className="hero-slide-control hero-slide-prev" onClick={showPrevious} aria-label="Ver fotografias anteriores">
        <IconChevronLeft />
      </button>
      <button type="button" className="hero-slide-control hero-slide-next" onClick={showNext} aria-label="Ver fotografias seguintes">
        <IconChevronRight />
      </button>

      <div className="hero-slide-dots" aria-hidden="true">
        {heroPhotos.map((photo, photoIndex) => (
          <span className={photoIndex === index ? 'active' : ''} key={photo} />
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    form.reset()
    form.querySelector('[data-status]').textContent = 'Mensagem preparada. Ligue-nos para um contacto imediato.'
  }

  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <h1>Peças Auto<br />de <em>Qualidade</em><br />Garantida</h1>
          <p className="hero-sub">A sua loja de confiança para peças de automóvel. As melhores marcas, atendimento especializado, sempre perto de si.</p>
          <div className="hero-btns">
            <a href="tel:+351253775904" className="btn-primary">Ligar Agora</a>
            <a href="https://www.google.com/maps/place/Desempenho+Veloz" target="_blank" rel="noreferrer" className="btn-outline">Como Chegar</a>
          </div>
          <div className="hero-stats">
            <div><div className="stat-num">4+</div><div className="stat-label">Anos de experiência</div></div>
            <div><div className="stat-num">20000+</div><div className="stat-label">Referências em stock</div></div>
            <div><div className="stat-num stat-goshop">GoShop</div><div className="stat-label">Marca exclusiva</div></div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-visual-wrap">
            <HeroSlideshow />
            <div className="hero-badge"><div className="badge-icon"><IconStar /></div><div><div className="badge-text">Marca Exclusiva GoShop</div><div className="badge-sub">Caldas das Taipas</div></div></div>
          </div>
        </div>
      </section>

      <div className="trust-bar">
        <div className="trust-item"><IconCheck /> Produtos Originais</div><span className="trust-sep" />
        <div className="trust-item">Seg-Sex 09-12h30 14h00-10h00 · Sáb 09h–12h30</div><span className="trust-sep" />
        <div className="trust-item">Atendimento Especializado</div><span className="trust-sep" />
        <div className="trust-item">Caldas das Taipas</div>
      </div>

      <section className="banner-promo">
        <ImageSlot src="/images/loja/banner-topo.jpg" alt="Banner publicitário Desempenho Veloz" className="banner-promo-img" label="banner-topo.jpg (banner publicitário)" />
      </section>

      <section className="section marcas-bg" id="marcas">
        <div className="section-inner">
          <div className="marcas-head"><div><span className="section-pill">Os nossos parceiros</span><h2>Marcas em que<br /><em>pode confiar</em></h2><p className="section-sub">Trabalhamos com as marcas mais reconhecidas do setor, garantindo qualidade e fiabilidade — de óleos a baterias e radiadores.</p></div></div>
          <div className="brands-category">Óleos & Lubrificantes</div>
          <div className="brands-grid">{brands.map(([initials, name, description]) => <article className="brand-card" key={name}><div className="brand-icon">{initials}</div><div><div className="brand-name">{name}</div><div className="brand-desc">{description}</div></div></article>)}</div>
          <div className="brands-category">Peças, Travagem, Filtração & Baterias</div>
          <div className="brand-chips">{['TRW', 'SKF', 'UFI', 'MAHLE', 'Blueprint', 'MAN', 'Cammoca · Baterias'].map((brand) => <span className="brand-chip" key={brand}>{brand}</span>)}</div>
        </div>
      </section>

      <section className="section dist-bg" id="distribuidora">
        <div className="section-inner dist-inner">
          <div>
            <div className="dist-tag">Marca Exclusiva</div>
            <h2>Parte da rede<br /><em>GoShop</em></h2>
            <p className="dist-p">A Desempenho Veloz faz parte da GoShop, uma marca exclusiva que reforça o nosso compromisso com peças de qualidade, stock alargado e as melhores condições da região.</p>
            <p className="dist-p">Somos parceiros diretos das principais marcas do setor, com peças 100% originais para óleos, travagem, filtragem, baterias e radiadores.</p>
            <p className="dist-p">Vendemos exclusivamente em loja física, com atendimento personalizado e apoio técnico especializado.</p>
            <div className="dist-features">
              <div className="dist-feature"><div className="dist-feature-title"><IconBox /> Stock Garantido</div><p>Disponibilidade das referências mais procuradas</p></div>
              <div className="dist-feature"><div className="dist-feature-title"><IconCoin /> Melhor Preço</div><p>Acesso direto significa melhores condições</p></div>
              <div className="dist-feature"><div className="dist-feature-title"><IconShieldCheck /> 100% Originais</div><p>Garantia de autenticidade em todas as peças</p></div>
              <div className="dist-feature"><div className="dist-feature-title"><IconWrench /> Apoio Técnico</div><p>Equipa especializada para a escolha certa</p></div>
            </div>
          </div>
          <div className="dist-visual"><ImageSlot src="/images/loja/banner.jpg" alt="Banner Desempenho Veloz GoShop" className="dist-visual-img" label="banner.jpg (foto do banner publicitário)" /><div className="dist-visual-caption"><div className="dist-num">GoShop</div><div className="dist-lbl">Marca Exclusiva · Caldas das Taipas</div></div></div>
        </div>
      </section>

      <section className="section" id="produtos">
        <div className="section-inner"><span className="section-pill">O que vendemos</span><h2>Produtos em <em>destaque</em></h2><div className="produtos-grid">{products.map(([icon, category, name, description, img]) => <article className="produto-card" key={name}><div className="produto-img-wrap"><ImageSlot src={img} alt={name} className="produto-img" /><span className="produto-icon">{icon}</span></div><div className="produto-info"><div className="produto-cat">{category}</div><div className="produto-name">{name}</div><div className="produto-desc">{description}</div></div></article>)}</div></div>
      </section>

      <section className="section artigos-bg">
        <div className="section-inner">
          <div className="artigos-head"><div><span className="section-pill">Dicas & Manutenção</span><h2>Artigos <em>úteis</em></h2></div><Link to="/artigos" className="btn-outline">Ver todos →</Link></div>
          <div className="articles-grid home-articles">
            {[[<IconDroplet key="i" />, 'Manutenção · 5 min', 'Quando trocar o óleo do carro?', 'Descubra os sinais de alerta e a frequência recomendada.'], [<IconWrench key="i" />, 'Segurança · 5 min', 'Como verificar as pastilhas dos travões', 'Aprenda a identificar desgaste antes que seja um problema.'], [<IconFilter key="i" />, 'Filtros · 3 min', 'Filtro de ar: quando substituir?', 'Um filtro sujo pode reduzir a potência e aumentar o consumo.']].map(([icon, meta, title, excerpt]) => <Link to="/artigos" className="article-card" key={title}><div className="article-img">{icon}</div><div className="article-body"><div className="article-meta">{meta}</div><div className="article-title">{title}</div><div className="article-excerpt">{excerpt}</div></div></Link>)}
          </div>
        </div>
      </section>

      <section className="section contact-bg" id="contacto">
        <div className="section-inner"><span className="section-pill">Fale Connosco</span><h2>Entre em <em>contacto</em></h2>
          <div className="contact-grid">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Nome Completo</label><input id="name" name="name" type="text" placeholder="O seu nome" required />
              <label htmlFor="email">E-mail</label><input id="email" name="email" type="email" placeholder="email@exemplo.com" required />
              <label htmlFor="phone">Telefone</label><input id="phone" name="phone" type="tel" placeholder="+351 912 345 678" />
              <label htmlFor="message">Mensagem</label><textarea id="message" name="message" placeholder="Em que podemos ajudar?" required />
              <button type="submit">Enviar Mensagem</button><p className="form-status" data-status aria-live="polite" />
            </form>
            <div>
              <div className="contact-info-card">
                <div className="info-item"><div className="info-icon">◷</div><div><div className="info-label">Horário</div><div className="info-value">Segunda a Sábado<br />09:00 – 19:00</div></div></div>
                <div className="info-item"><div className="info-icon">☎</div><div><div className="info-label">Telefone</div><div className="info-value"><a href="tel:+351253775904">253 775 904</a></div></div></div>
                <div className="info-item"><div className="info-icon">⌖</div><div><div className="info-label">Localização</div><div className="info-value">R. Francisco Pereira Silvério 22, 4805-091, Caldelas, Guimarães</div></div></div>
              </div>
              <div className="map-embed"><iframe title="Mapa Desempenho Veloz" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.7!2d-8.350224!3d41.487442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24fbd7044b339f%3A0x91d2060a94096503!2sDesempenho+Veloz+-+Pe%C3%A7as+Auto!5e0!3m2!1spt!2spt!4v1" loading="lazy" /></div>
              <div className="social-row"><a href="#" className="social-btn">Facebook</a><a href="#" className="social-btn">Instagram</a></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}