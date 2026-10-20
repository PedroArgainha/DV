import { Link } from 'react-router-dom'

export default function Footer() {
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

