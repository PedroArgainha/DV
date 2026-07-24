import { Link } from 'react-router-dom'
import ImageSlot from '../components/ImageSlot'
import PageHero from '../components/PageHero'
import { IconBolt, IconHandshake, IconTrophy } from '../components/Icons'

const values = [
  [<IconTrophy key="i" />, 'Qualidade', 'Trabalhamos apenas com marcas reconhecidas. Cada produto é selecionado com rigor para garantir a máxima fiabilidade.'],
  [<IconHandshake key="i" />, 'Confiança', 'A relação com os clientes é baseada na honestidade. Aconselhamos a melhor solução sem pressões comerciais.'],
  [<IconBolt key="i" />, 'Conhecimento', 'Anos de experiência traduzem-se num atendimento especializado e no conselho certo para cada peça.'],
]

const timeline = [
  ['2021', 'O início de tudo', 'Os dois sócios, unidos pela paixão pelos automóveis, decidiram criar uma loja especializada nas Caldas das Taipas.'],
  ['2022', 'Primeiros passos', 'A loja abriu com stock selecionado com rigor e foco na qualidade e no aconselhamento personalizado.'],
  ['2023', 'Marca Exclusiva GoShop', 'A loja passa a fazer parte da rede GoShop, reforçando o compromisso com stock alargado e preços competitivos.'],
  ['Hoje', 'Uma referência na região', 'Centenas de clientes satisfeitos refletem o compromisso da equipa com a excelência.'],
]

// Fotos da construção da loja — coloque os ficheiros em public/images/construcao/
// com estes nomes (podem ser tantas ou tão poucas quanto tiver; as que faltarem
// aparecem como caixa a indicar o nome do ficheiro).
const construction = [
  'construcao-1.jpg',
  'construcao-2.jpg',
  'construcao-3.jpg',
  'construcao-4.jpg',
]

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="A nossa história" title="Quem" accent="somos nós" description="Uma loja nascida da paixão pelos automóveis e pelo compromisso com a qualidade. Conheça a história da Desempenho Veloz." watermark="SOBRE" />
      <section className="section"><div className="section-inner intro-grid">
        <div className="intro-text"><span className="section-pill">A nossa missão</span><h2>Qualidade<br /><em>garantida, sempre</em></h2><p>A Desempenho Veloz nasceu com um objetivo claro: oferecer as melhores peças de automóvel nas Caldas das Taipas, com atendimento especializado e preços justos.</p><p>Somos distribuidores das marcas mais reconhecidas do setor, garantindo produtos originais com excelentes condições.</p><p>A nossa equipa tem experiência no setor automóvel e está sempre disponível para ajudar a encontrar a peça certa.</p><Link to={{ pathname: '/', hash: '#contacto' }} className="btn-outline about-contact">Fale Connosco →</Link></div>
        <div className="about-image-wrap"><div className="about-image"><div className="about-image-accent" /><ImageSlot src="/images/loja/loja-interior.jpg" alt="Interior da loja Desempenho Veloz" className="about-image-photo" label="loja-interior.jpg (foto da loja)" /></div></div>
      </div></section>

      <section className="section valores-bg"><div className="section-inner"><span className="section-pill">O que nos define</span><h2>Os nossos <em>valores</em></h2><div className="valores-grid">{values.map(([icon, title, text]) => <article className="valor-card" key={title}><div className="valor-icon">{icon}</div><div className="valor-title">{title}</div><div className="valor-text">{text}</div></article>)}</div></div></section>

      <section className="section"><div className="section-inner"><span className="section-pill">A equipa</span><h2>Os nossos <em>sócios</em></h2>
        <div className="equipa-card">
          <div className="equipa-img"><ImageSlot src="/images/equipa/socios.jpg" alt="Os sócios da Desempenho Veloz" className="equipa-photo" label="socios.jpg (foto dos dois sócios)" /></div>
          <div className="equipa-body">
            <div className="socio-role">Co-fundadores</div>
            <div className="equipa-name">Os Sócios da Desempenho Veloz</div>
            <p className="socio-bio">Foi a paixão comum pelos automóveis que uniu os dois sócios e deu origem à Desempenho Veloz. Um traz a experiência técnica, com um conhecimento profundo do setor automóvel construído ao longo dos anos; o outro assegura a gestão e a relação com os clientes, garantindo que cada pessoa encontra a peça certa ao melhor preço. Juntos, mantêm o compromisso com um atendimento próximo, honesto e especializado, todos os dias na loja.</p>
          </div>
        </div>
      </div></section>

      <section className="section historia-bg"><div className="section-inner"><span className="section-pill">A nossa jornada</span><h2>Como <em>começámos</em></h2><div className="timeline">{timeline.map(([year, title, text]) => <div className="tl-item" key={`${year}-${title}`}><div className="tl-dot" /><div className="tl-year">{year}</div><div className="tl-title">{title}</div><div className="tl-text">{text}</div></div>)}</div></div></section>

      <section className="section"><div className="section-inner">
        <span className="section-pill">Nos bastidores</span>
        <h2>A construção<br /><em>da loja</em></h2>
        <p className="section-sub">Um pouco do processo de criar a Desempenho Veloz, do espaço vazio à loja que conhece hoje.</p>
        <div className="construction-grid">
          {construction.map((file) => <div className="construction-item" key={file}><ImageSlot src={`/images/construcao/${file}`} alt="Construção da loja Desempenho Veloz" className="construction-photo" label={file} /></div>)}
        </div>
      </div></section>
    </>
  )
}
