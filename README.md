# Landing Page — Ingrid Cunha | Psicóloga Infantojuvenil (CRP 13/12719)

Landing page responsiva, acessível (WCAG AA) e otimizada para conversão (CRO) e mecanismos de busca (SEO), desenvolvida para a psicóloga clínica infantojuvenil **Ingrid Cunha** em total conformidade com o Manual de Identidade Visual e com o Código de Ética Profissional do Psicólogo (CFP).

---

## Estrutura de Arquivos

```text
projeto/
├── index.html                  # Estrutura HTML5 semântica, SEO, Open Graph e JSON-LD
├── README.md                   # Guia rápido de manutenção e publicação
├── css/
│   └── style.css               # Design tokens (:root), layout mobile-first e animações
├── js/
│   └── main.js                 # Configuração centralizada do WhatsApp, menu, FAQ e tracking
└── assets/
    ├── logo.png                # Logotipo oficial (arco-íris + Ingrid Cunha)
    ├── ingrid.png              # Retrato profissional de Ingrid Cunha (recorte PNG)
    ├── coracao.png             # Coração rabiscado em giz de cera
    ├── canecas-2.png           # Canecas institucionais (Amarelo Baunilha e Rosa Acolhimento)
    ├── Brand Identity - Ingrid.png # Prancha de apresentação da identidade visual
    ├── favicon.png             # Ícone da aba do navegador (64x64px)
    ├── og-image.jpg            # Imagem de pré-visualização social (1200x630px)
    ├── icons/                  # Ícones e grafismos (insta.png, rainbow.svg, estrelas, nuvem, etc.)
    └── fonts/                  # Pasta para arquivo local da fonte 'Dashing Personal' (opcional)
```

---

## 1. Como alterar o número e a mensagem do WhatsApp

Todos os botões de WhatsApp da página são alimentados por **uma única constante** no topo do arquivo [`js/main.js`](js/main.js):

1. Abra `js/main.js`.
2. Localize o bloco `WHATSAPP_CONFIG` nas primeiras linhas:

```javascript
const WHATSAPP_CONFIG = Object.freeze({
  // Formato internacional apenas com números: 55 + DDD + Número (Configurado: '5583986043830')
  phone: '5583986043830',

  // Mensagem inicial enviada automaticamente pelo visitante:
  message:
    'Olá, Ingrid! Vi seu site e gostaria de tirar algumas dúvidas e saber sobre a disponibilidade de horários para atendimento.'
});
```

3. Caso deseje alterar futuramente, modifique o campo `phone` e salve o arquivo. Todos os botões do cabeçalho, hero, seções, rodapé, barra mobile e botão flutuante serão atualizados automaticamente.

---

## 2. Como editar textos e preencher placeholders (`[A CONFIRMAR]` / `[INSERIR]`)

1. Abra o arquivo [`index.html`](index.html) em qualquer editor de código (como VS Code).
2. Use a busca (`Ctrl + F`) por:
   - `[CIDADE]` — Substitua pela cidade de atuação no `<title>`, `<meta name="description">`, JSON-LD e FAQ.
   - `[SEU-DOMINIO.COM.BR]` — Substitua pelo domínio oficial nas tags `canonical`, Open Graph e JSON-LD.
   - `[A CONFIRMAR]` — Revise as respostas do FAQ (faixa etária atendida, primeira sessão, presencial/online, duração da sessão e modalidade particular/reembolso).
   - `[INSERIR` — Preencha endereço do consultório, horários de atendimento, telefone visível no card de contato, `@instagram` e e-mail.
   - `[EDITÁVEL]` — Caso deseje personalizar o passo a passo da seção *"Como funciona o acompanhamento"*.

---

## 3. Como substituir fotos, logos e fonte local

Os caminhos já estão configurados diretamente em `assets/`:

| Arquivo | Caminho | Proporção / Formato Ideal | Uso na Página |
| :--- | :--- | :--- | :--- |
| **Logotipo Oficial** | `assets/logo.png` | `255x197px` (PNG transparente) | Cabeçalho, cards de identificação, CTA final e rodapé |
| **Foto da Ingrid** | `assets/ingrid.png` | `404x762px` (PNG transparente) | Hero e Seção "Sobre a Ingrid" |
| **Coração Giz de Cera** | `assets/coracao.png` | `227x199px` (PNG transparente) | Selos do Hero, Seção Sinais, Sobre e Família |
| **Canecas da Marca** | `assets/canecas-2.png` | `253x120px` (PNG transparente) | Seção "O papel essencial da família" |
| **Ícone Instagram** | `assets/icons/insta.png` | `38x38px` (PNG transparente) | Card de Instagram na seção Contato |
| **Favicon** | `assets/favicon.png` | `64x64px` (PNG transparente) | Ícone da aba do navegador |
| **Imagem Social** | `assets/og-image.jpg` | `1200x630px` (JPG) | Prévia ao compartilhar link no WhatsApp |

> **Fonte Principal (`Dashing Personal`):** Caso possua o arquivo `.woff2` da fonte `Dashing Personal`, basta salvá-lo em `assets/fonts/DashingPersonal-Bold.woff2`. A regra `@font-face` já está pronta no topo de `css/style.css`.

---

## 4. Como ajustar cores e variáveis da identidade visual

Toda a identidade visual está centralizada no seletor `:root` de [`css/style.css`](css/style.css):

```css
:root {
  --color-rose: #E9A4A8;       /* Rosa Acolhimento (Cor principal) */
  --color-vanilla: #F6DEBC;    /* Amarelo Baunilha (Cor secundária) */
  --color-sky: #BAE5ED;        /* Azul Serenidade (Cor de apoio) */
  --color-white: #FFFFFF;      /* Branco Puro */
  /* ... fontes, espaçamentos, raios de borda e sombras */
}
```

---

## 5. Como ativar Google Tag Manager (GTM / GA4) e Meta Pixel

1. No `<head>` de [`index.html`](index.html), descomente os blocos de script do **GTM** e/ou **Meta Pixel** e substitua `GTM-XXXXXXX` ou `[INSERIR_PIXEL_ID]`.
2. Todos os botões possuem o atributo `data-track="..."` (ex.: `data-track="cta-whatsapp-hero"`). O arquivo `js/main.js` já envia automaticamente os eventos `cta_click` para o `dataLayer` e `Contact` para o `fbq`.
