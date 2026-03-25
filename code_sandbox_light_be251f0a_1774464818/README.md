# QP Altus — Website Institucional

Site institucional da QP Altus — Seguros e Soluções Financeiras.  
Identidade visual: Grafite · Dourado · Off-White.

---

## ✅ Funcionalidades Implementadas

- **13 páginas HTML** completas, responsivas e sem CSS/JS inline
- CSS centralizado em `css/style.css` (1265 linhas, completo)
- JavaScript centralizado em `js/main.js`
- Navbar fixa com efeito scroll, dropdowns desktop e menu mobile
- Hero section com animação na home
- Grid de serviços, seções de benefícios, steps, FAQ accordion
- Formulário de contato (mock submit)
- Footer completo com navegação e LGPD
- Animações AOS-like com IntersectionObserver
- `_redirects` e `_headers` configurados para Cloudflare Pages

---

## 📁 Estrutura de Arquivos

```
index.html                     → Home
seguros.html                   → Proteção Patrimonial: Seguros
saude.html                     → Proteção Patrimonial: Saúde
credito-pf.html                → Soluções de Crédito: Crédito PF
credito-pj.html                → Soluções de Crédito: Crédito PJ
consignado.html                → Soluções de Crédito: Consignado
antecipacao.html               → Soluções de Crédito: Antecipação de Recebíveis
consorcios.html                → Investimento & Imóveis: Consórcios
financiamento-veiculos.html    → Investimento & Imóveis: Financiamento de Veículos
financiamento-imobiliario.html → Investimento & Imóveis: Financiamento Imobiliário
home-equity.html               → Investimento & Imóveis: Home Equity
altus-concierge.html           → Altus Concierge
contato.html                   → Contato
css/style.css                  → Stylesheet global (1265 linhas)
js/main.js                     → JavaScript global
_redirects                     → Redirects Cloudflare Pages
_headers                       → Headers HTTP Cloudflare Pages
```

---

## 🚀 Deploy no Cloudflare Pages

**Configuração correta:**
- **Framework preset**: None
- **Build command**: (deixar vazio)
- **Build output directory**: `/` ou `.` (raiz do projeto)
- **Root directory**: (deixar vazio)

**Não incluir** `package.json` com script de build no repositório.

---

## 🔗 Rotas do Site

| Rota | Arquivo |
|------|---------|
| `/` | index.html |
| `/seguros` | seguros.html |
| `/saude` | saude.html |
| `/credito-pf` | credito-pf.html |
| `/credito-pj` | credito-pj.html |
| `/consignado` | consignado.html |
| `/antecipacao` | antecipacao.html |
| `/consorcios` | consorcios.html |
| `/financiamento-veiculos` | financiamento-veiculos.html |
| `/financiamento-imobiliario` | financiamento-imobiliario.html |
| `/home-equity` | home-equity.html |
| `/altus-concierge` | altus-concierge.html |
| `/contato` | contato.html |

---

## 🔧 Próximos Passos Recomendados

1. Substituir telefone `(00) 00000-0000` pelo número real
2. Substituir e-mail `contato@qpaltus.com.br` pelo e-mail real
3. Adicionar links reais para Instagram e LinkedIn
4. Integrar formulário de contato com backend (ex: Formspree, EmailJS)
5. Adicionar favicon e meta tags Open Graph para redes sociais
6. Configurar domínio customizado no Cloudflare Pages
