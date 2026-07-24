// Ícones lineares simples (sem cor própria — herdam a cor do texto envolvente)
// para substituir os emojis e manter um visual mais sóbrio e consistente.

const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function IconDroplet(props) {
  return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M12 3c3.5 4.2 6 7.6 6 10.5a6 6 0 1 1-12 0C6 10.6 8.5 7.2 12 3Z" /></svg>
}
export function IconWrench(props) {
  return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M14.7 6.3a4 4 0 0 0-5.4 4.6L3 17.2 6.8 21l6.3-6.3a4 4 0 0 0 4.6-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6Z" /></svg>
}
export function IconFilter(props) {
  return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M4 5h16M7 5v5.5L11 15v4l2-1v-3l4-4.5V5" /></svg>
}
export function IconBattery(props) {
  return <svg viewBox="0 0 24 24" {...base} {...props}><rect x="3" y="8" width="16" height="9" rx="1.5" /><path d="M21 11v3M9 8V6M13 8V6M11 11v3M9 12.5h4" /></svg>
}
export function IconThermometer(props) {
  return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0Z" /></svg>
}
export function IconCar(props) {
  return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M4 16v-3l1.8-4.3A2 2 0 0 1 7.6 7.5h8.8a2 2 0 0 1 1.8 1.2L20 13v3" /><path d="M4 16h16v2.2a.8.8 0 0 1-.8.8h-1.4a.8.8 0 0 1-.8-.8V17H7v1.2a.8.8 0 0 1-.8.8H4.8a.8.8 0 0 1-.8-.8V16Z" /><circle cx="7.5" cy="16" r="1.4" /><circle cx="16.5" cy="16" r="1.4" /></svg>
}
export function IconBulb(props) {
  return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M9 18h6M10 21h4M7 10a5 5 0 1 1 10 0c0 2-1.2 3-2 4-.6.7-1 1.3-1 2H10c0-.7-.4-1.3-1-2-.8-1-2-2-2-4Z" /></svg>
}
export function IconTrophy(props) {
  return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" /><path d="M8 5H5a3 3 0 0 0 3 4M16 5h3a3 3 0 0 1-3 4M10 15v2M14 15v2M8 21h8M9 17h6v2a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-2Z" /></svg>
}
export function IconHandshake(props) {
  return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M2 12.5 6 9l3.2 2.6a1.6 1.6 0 0 0 2.1-.1l.2-.2a1.5 1.5 0 0 0-.1-2.2L9 7" /><path d="M22 12.5 18 9l-4.6 3.8M6 9l3-2.2a2 2 0 0 1 2.4 0L15 9M8 15l2.3 1.9a1.6 1.6 0 0 0 2.2-.1 1.6 1.6 0 0 0 2.2.2l.3-.2a1.6 1.6 0 0 0 .3-2.1M16 15l-2 1.7" /></svg>
}
export function IconBolt(props) {
  return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M13 3 5 13.5h5.5L11 21l8-10.5h-5.5L13 3Z" /></svg>
}
export function IconBox(props) {
  return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M3.5 8 12 4l8.5 4-8.5 4-8.5-4Z" /><path d="M3.5 8v8L12 20l8.5-4V8M12 12v8" /></svg>
}
export function IconCoin(props) {
  return <svg viewBox="0 0 24 24" {...base} {...props}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5v9M9.5 9.7c0-1.2 1.1-1.8 2.5-1.8s2.3.7 2.3 1.7c0 2.4-4.8 1.1-4.8 3.5 0 1 1 1.8 2.5 1.8s2.5-.6 2.5-1.8" /></svg>
}
export function IconShieldCheck(props) {
  return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-2.5Z" /><path d="m9 12 2 2 4-4" /></svg>
}
export function IconStar(props) {
  return <svg viewBox="0 0 24 24" {...base} {...props}><path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7L12 3Z" /></svg>
}
export function IconCheck(props) {
  return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M4 12.5 9.5 18 20 6" /></svg>
}
export function IconShield(props) {
  return <svg viewBox="0 0 24 24" {...base} {...props}><path d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-2.5Z" /></svg>
}

export function IconChevronLeft(props) {
  return <svg viewBox="0 0 24 24" {...base} {...props}><path d="m15 5-7 7 7 7" /></svg>
}

export function IconChevronRight(props) {
  return <svg viewBox="0 0 24 24" {...base} {...props}><path d="m9 5 7 7-7 7" /></svg>
}
