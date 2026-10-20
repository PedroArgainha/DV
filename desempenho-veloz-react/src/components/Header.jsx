import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header() {
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

