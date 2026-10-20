import { Link } from 'react-router-dom'
import ImageSlot from '../components/ImageSlot'
import ContactForm from '../components/ContactForm'
import HeroSlideshow from '../components/HeroSlideshow'
import { brands, products } from '../data/catalog'
import { IconBox, IconCheck, IconCoin, IconDroplet, IconFilter, IconShieldCheck, IconStar, IconWrench } from '../components/Icons'

export default function HomePage() {
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
            <div><div className="stat-num">+25</div><div className="stat-label">Anos de experiência</div></div>
            <div><div className="stat-num">+20.000</div><div className="stat-label">Referências em stock</div></div>
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
        <div className="trust-item">Seg-Sex 09-12h30 14h00-19h00 · Sáb 09h–12h30</div><span className="trust-sep" />
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
          <div className="brand-chips">{['TRW', 'SKF', 'UFI', 'MAHLE', 'Blueprint', 'MAN', 'Kammoca · Baterias'].map((brand) => <span className="brand-chip" key={brand}>{brand}</span>)}</div>
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
            <ContactForm />
            <div>
              <div className="contact-info-card">
                <div className="info-item"><div className="info-icon">◷</div><div><div className="info-label">Horário</div><div className="info-value">Segunda-Sexta · 09-12h30 14h00-19h00 <br />Sábado 09h–12h30</div></div></div>
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