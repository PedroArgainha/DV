import { useState } from 'react'

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export default function ContactForm() {
  const [status, setStatus] = useState({ type: '', text: '' })
  const [sending, setSending] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    if (sending) return
    const form = event.currentTarget
    if (!ACCESS_KEY) {
      setStatus({ type: 'error', text: 'O formulário ainda não está configurado. Contacte-nos por telefone.' })
      return
    }

    setSending(true)
    setStatus({ type: '', text: '' })
    const formData = new FormData(form)
    const payload = {
      access_key: ACCESS_KEY,
      subject: 'Novo contacto — site Desempenho Veloz',
      from_name: 'Website Desempenho Veloz',
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      message: String(formData.get('message') || '').trim(),
      botcheck: String(formData.get('botcheck') || ''),
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error('O serviço não confirmou o envio')
      form.reset()
      setStatus({ type: 'success', text: 'Mensagem enviada com sucesso. Entraremos em contacto consigo.' })
    } catch {
      setStatus({ type: 'error', text: 'Não foi possível enviar a mensagem. Tente novamente ou ligue-nos.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Nome Completo</label><input id="name" name="name" type="text" autoComplete="name" maxLength={120} placeholder="O seu nome" required />
      <label htmlFor="email">E-mail</label><input id="email" name="email" type="email" autoComplete="email" maxLength={254} placeholder="email@exemplo.com" required />
      <label htmlFor="phone">Telefone</label><input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={30} placeholder="+351 912 345 678" />
      <label htmlFor="message">Mensagem</label><textarea id="message" name="message" maxLength={5000} placeholder="Em que podemos ajudar?" required />
      <input type="checkbox" name="botcheck" className="form-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button type="submit" disabled={sending}>{sending ? 'A enviar…' : 'Enviar Mensagem'}</button>
      <p className="form-status" role="status" aria-live="polite" data-state={status.type}>{status.text}</p>
      <p className="form-privacy">Ao enviar, os dados introduzidos são transmitidos ao serviço Web3Forms para entrega à loja. Não inclua dados sensíveis.</p>
    </form>
  )
}
