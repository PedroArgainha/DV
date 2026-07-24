import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname, location.hash])

  const sectionLink = (id) => ({ pathname: '/', hash: `#${id}` })

  return (
    <header className={`site-nav ${scrolled ? 'scrolled' : ''} ${open ? 'open' : ''}`}>
      <Link to="/" className="nav-logo" aria-label="Desempenho Veloz — início">
        Desempenho<span>Veloz</span>
      </Link>
      <nav aria-label="Navegação principal">
        <ul className="nav-links">
          <li><Link to={sectionLink('marcas')}>Marcas</Link></li>
          <li><Link to={sectionLink('produtos')}>Produtos</Link></li>
          <li><NavLink to="/artigos">Artigos</NavLink></li>
          <li><NavLink to="/sobre">Sobre Nós</NavLink></li>
          <li><Link to={sectionLink('contacto')} className="nav-cta">Contacto</Link></li>
        </ul>
      </nav>
      <button
        className="nav-toggle"
        type="button"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span /><span />
      </button>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-logo">Desempenho<span>Veloz</span></div>
          <p className="footer-about">A sua loja de referência para peças de automóvel nas Caldas das Taipas. Atendimento especializado, produtos originais e preços competitivos.</p>
        </div>
        <div className="footer-col">
          <h4>Produtos</h4>
          <ul><li><a href="#">Óleos Liqui-Moly</a></li><li><a href="#">Óleos Castrol</a></li><li><a href="#">Travões & Discos</a></li><li><a href="#">Filtros</a></li><li><a href="#">Baterias</a></li><li><a href="#">Radiadores</a></li></ul>
        </div>
        <div className="footer-col">
          <h4>Empresa</h4>
          <ul><li><Link to="/sobre">Sobre Nós</Link></li><li><Link to="/artigos">Artigos</Link></li><li><Link to={{ pathname: '/', hash: '#contacto' }}>Contacto</Link></li></ul>
        </div>
        <div className="footer-col">
          <h4>Contacto</h4>
          <ul><li><a href="tel:+351253775904">253 775 904</a></li><li><span>Caldas das Taipas</span></li><li><span>Seg–Sáb, 09–19h</span></li></ul>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Desempenho Veloz · Todos os direitos reservados</span><span>Caldas das Taipas, Guimarães</span></div>
    </footer>
  )
}

export default function Layout({ children }) {
  return <><Header /><main>{children}</main><Footer /></>
}
