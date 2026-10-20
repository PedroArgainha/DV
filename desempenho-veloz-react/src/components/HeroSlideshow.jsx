import { useEffect, useState } from 'react'
import ImageSlot from './ImageSlot'
import { IconChevronLeft, IconChevronRight } from './Icons'

// Fotos da hero em slide — coloque os ficheiros em public/images/loja/
// com estes nomes. Pode ter mais do que 4, é só acrescentar à lista.
const heroPhotos = [
  '/images/loja/slide-1.jpg',
  '/images/loja/slide-2.jpg',
  '/images/loja/slide-3.jpg',
  '/images/loja/slide-4.jpg',
]

export default function HeroSlideshow() {
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

