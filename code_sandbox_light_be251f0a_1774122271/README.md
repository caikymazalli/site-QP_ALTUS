# QP Altus — Website Institucional

> **Seguros e Soluções Financeiras** | Confiança. Estratégia. Evolução.

Website institucional premium, responsivo e em pt-BR para a empresa QP Altus, desenvolvido com base no documento de especificação técnica e na identidade visual da marca.

---

## 🎯 Objetivo do Projeto

Criar uma presença digital que reflita o posicionamento premium e consultivo da QP Altus, comunicando claramente o portfólio de serviços financeiros e gerando conversões para atendimento especializado.

---

## ✅ Funcionalidades Implementadas

### Estrutura e Design
- [x] Identidade visual fiel ao branding: Preto Grafite (#121212), Dourado (#C5A059), Off-White (#F5F5F5)
- [x] Tipografia Montserrat (títulos) + Inter (corpo)
- [x] Layout responsivo e mobile-first
- [x] Navbar com efeito de scroll, dropdowns e menu hamburger mobile
- [x] Animações de entrada (AOS-like via Intersection Observer)
- [x] FAQ accordion interativo
- [x] CTAs com fundo dourado e texto preto em todas as páginas
- [x] Footer completo com sitemap, redes sociais e LGPD
- [x] Ícones lineares FontAwesome em dourado

### Páginas Criadas

| Página | Arquivo | Descrição |
|--------|---------|-----------|
| Home | `index.html` | Hero, Pilares, Vitrine de Serviços, Destaque Concierge, CTA |
| Seguros | `seguros.html` | Proteção patrimonial para PF e PJ |
| Saúde | `saude.html` | Curadoria de planos de saúde premium |
| Crédito PF | `credito-pf.html` | Crédito pessoal com assessoria |
| Crédito PJ | `credito-pj.html` | Capital de giro, expansão e reorganização |
| Consignado | `consignado.html` | Menores taxas para INSS, servidores e CLT |
| Antecipação de Recebíveis | `antecipacao.html` | Liquidez imediata para empresas |
| Consórcios | `consorcios.html` | Planejamento inteligente sem juros |
| Financiamento de Veículos | `financiamento-veiculos.html` | Melhores condições do mercado |
| Financiamento Imobiliário | `financiamento-imobiliario.html` | Do diagnóstico à chave na mão |
| Home Equity | `home-equity.html` | Crédito com garantia de imóvel |
| Altus Concierge | `altus-concierge.html` | Gestão de Contas + Sistemas de alta performance |
| Contato | `contato.html` | Formulário + informações de atendimento |

---

## 📁 Estrutura de Arquivos

```
/
├── index.html                    ← Home
├── seguros.html
├── saude.html
├── credito-pf.html
├── credito-pj.html
├── consignado.html
├── antecipacao.html
├── consorcios.html
├── financiamento-veiculos.html
├── financiamento-imobiliario.html
├── home-equity.html
├── altus-concierge.html
├── contato.html
├── css/
│   └── style.css                 ← CSS global premium
└── js/
    └── main.js                   ← JS: navbar, menu, FAQ, animações
```

---

## 🎨 Identidade Visual

| Elemento | Valor |
|----------|-------|
| Cor Primária (Grafite) | `#121212` |
| Cor de Acento (Dourado) | `#C5A059` |
| Cor de Apoio (Off-White) | `#F5F5F5` |
| Tipografia Títulos | Montserrat Bold/SemiBold |
| Tipografia Corpo | Inter Regular |
| Botões CTA | Fundo `#C5A059`, Texto `#121212` |

---

## 🗺️ Sitemap / URIs de Entrada

```
/ (index.html)
├── /seguros.html
├── /saude.html
├── /credito-pf.html
├── /credito-pj.html
├── /consignado.html
├── /antecipacao.html
├── /consorcios.html
├── /financiamento-veiculos.html
├── /financiamento-imobiliario.html
├── /home-equity.html
├── /altus-concierge.html
└── /contato.html
```

---

## 📐 Estrutura de Cada Página de Serviço

Todas as páginas de serviço seguem o padrão:
1. **Page Hero** — breadcrumb, tag, título, subtítulo, CTA primário
2. **Introdução** — split layout com texto e visual
3. **Para Quem É** — grid de cards (fundo escuro)
4. **Benefícios** — grid de ícones + descrição
5. **Como Funciona** — lista de steps numerados
6. **FAQ** — accordion interativo
7. **CTA Final** — bloco de conversão com botão dourado

---

## ☁️ Deploy no Cloudflare Pages

### Configuração obrigatória no painel do Cloudflare Pages:

| Campo | Valor |
|-------|-------|
| **Framework preset** | `None` (Site Estático) |
| **Build command** | *(deixar em branco)* |
| **Build output directory** | `/` (raiz) ou *(deixar em branco)* |
| **Root directory** | `/` |

> ⚠️ **Importante:** Não selecionar nenhum framework. O site é HTML/CSS/JS puro sem etapa de build.

---

## 🚀 Próximos Passos Recomendados

- [ ] Adicionar integração real com WhatsApp no CTA flutuante (botão fixo)
- [ ] Conectar formulário de contato a um backend ou serviço (EmailJS, Formspree, etc.)
- [ ] Adicionar Google Analytics (gtag.js)
- [ ] Criar página de Política de Privacidade (LGPD)
- [ ] Adicionar favicon com o logotipo QP Altus
- [ ] Implementar OpenGraph/SEO meta tags com imagens de preview
- [ ] Adicionar seção de depoimentos/cases de clientes
- [ ] Adicionar números de credibilidade (ex: X clientes atendidos, X anos de mercado)
- [ ] Implementar chatbot ou widget de WhatsApp fixo na tela
- [ ] Otimizar imagens e adicionar fotos reais da equipe e escritório

---

## 🔧 Tecnologias Utilizadas

- **HTML5** semântico
- **CSS3** com variáveis CSS (custom properties)
- **JavaScript ES6+** (vanilla, sem frameworks)
- **Google Fonts** — Montserrat + Inter
- **Font Awesome 6** via CDN (ícones lineares)
- **Intersection Observer API** (animações de scroll)

---

## 📱 Responsividade

| Breakpoint | Layout |
|------------|--------|
| Desktop (>1024px) | Layout completo, nav horizontal, grids multi-coluna |
| Tablet (768–1024px) | Grid adaptado, footer 3 colunas |
| Mobile (<768px) | Menu hamburger, single column, CTAs full-width |

---

*Desenvolvido em 21 de março de 2026 com base no brief e identidade visual da QP Altus.*
