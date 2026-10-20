# Alterações ao projeto Desempenho Veloz

## Código reorganizado
- `src/components/Header.jsx` e `Footer.jsx`: extraídos de `Layout.jsx`.
- `src/components/HeroSlideshow.jsx`: slideshow separado da página inicial.
- `src/data/catalog.jsx`: marcas e produtos isolados da página.
- `src/components/ContactForm.jsx`: novo formulário com estados de envio, sucesso e erro.
- A aparência existente foi mantida; foram acrescentadas apenas regras CSS para estados do formulário.

## Como ativar o formulário (Web3Forms)
1. Escolhe o endereço de e-mail da empresa que deverá receber as mensagens.
2. Em https://web3forms.com cria uma access key gratuita para esse e-mail e confirma-o, conforme as instruções do serviço.
3. No teu computador, cria o ficheiro `.env.local` dentro de `desempenho-veloz-react` com:

   `VITE_WEB3FORMS_ACCESS_KEY=CHAVE_RECEBIDA`

4. Para a Vercel: Project → Settings → Environment Variables → criar `VITE_WEB3FORMS_ACCESS_KEY` com o mesmo valor e fazer novo deploy.
5. Testa com um envio real e confirma a receção no e-mail e na pasta de spam.

**Importante:** Variáveis `VITE_` ficam acessíveis no browser; a access key Web3Forms é uma chave pública de integração e não deve ser tratada como segredo. Não coloques passwords nem chaves privadas do servidor nesta variável.

Sem chave, o formulário mostra um aviso e **não** finge enviar a mensagem.

### Privacidade e proteção contra spam
- O envio passa por um fornecedor externo (Web3Forms). Antes de publicar, confirma termos, tratamento de dados e texto de privacidade adequado ao teu negócio.
- Foi adicionado campo honeypot; para maior proteção, configura CAPTCHA/limitação de abuso segundo o serviço.

## Testes antes de publicar
`npm ci`
`npm run build`
`npm run dev`

Testa navegação, imagens e contacto, no telemóvel e no computador. Mantém o deployment atual até verificares tudo.
