import { useState } from 'react'

// Mostra a imagem em src (dentro de /public/images/...). Se o ficheiro ainda
// não existir, mostra uma caixa limpa com o nome do ficheiro esperado — assim
// fica sempre claro que foto falta e onde a colocar.
export default function ImageSlot({ src, alt = '', className = '', label }) {
  const [failed, setFailed] = useState(false)
  const filename = label || src.split('/').pop()

  if (failed) {
    return (
      <div className={`img-slot img-slot-empty ${className}`}>
        <span className="img-slot-icon">▧</span>
        <span className="img-slot-label">{filename}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`img-slot ${className}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}
