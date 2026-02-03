# BUDLAB Design System

**Versão:** 1.0  
**Última atualização:** Fevereiro 2026  
**Slogan:** "dichavando arte pelas ruas"

---

## 🎨 Paleta de Cores

### Cores Primárias

```css
--budlab-green: #00B050;        /* Verde principal - usado em CTAs e destaques */
--budlab-green-light: #2DC26B;  /* Verde claro - hover states */
--budlab-green-dark: #009640;   /* Verde escuro - active states */
```

### Cores Neutras

```css
--budlab-black: #000000;        /* Preto - backgrounds escuros, textos principais */
--budlab-white: #FFFFFF;        /* Branco - backgrounds claros, textos em preto */
--budlab-gray-100: #F5F5F5;     /* Cinza muito claro - backgrounds de cards */
--budlab-gray-200: #E5E5E5;     /* Cinza claro - borders sutis */
--budlab-gray-300: #D4D4D4;     /* Cinza médio - borders */
--budlab-gray-700: #404040;     /* Cinza escuro - textos secundários */
```

### Cores Semânticas

```css
--color-text-primary: #000000;
--color-text-secondary: #404040;
--color-text-on-dark: #FFFFFF;
--color-background-primary: #FFFFFF;
--color-background-secondary: #F5F5F5;
--color-background-dark: #000000;
--color-accent: #00B050;
--color-border: #E5E5E5;
```

---

## 📝 Tipografia

### Família de Fontes

```css
--font-primary: 'Helvetica Neue', Arial, sans-serif;
/* Alternativas: 'Inter', 'SF Pro Display', 'Roboto' */
```

### Escala Tipográfica

```css
/* Headings */
--font-size-h1: 80px;           /* Desktop - PRODUTOS EM ALTA */
--font-size-h1-mobile: 48px;    /* Mobile - PRODUTOS EM ALTA */

--font-size-h2: 64px;           /* Desktop - TODOS OS PRODUTOS */
--font-size-h2-mobile: 40px;    /* Mobile - TODOS OS PRODUTOS */

--font-size-h3: 48px;           /* Desktop - Seção Sobre */
--font-size-h3-mobile: 32px;    /* Mobile - Seção Sobre */

--font-size-h4: 24px;           /* Títulos de seção menores */
--font-size-h5: 20px;           /* Subtítulos */

/* Body */
--font-size-body-large: 18px;   /* Corpo de texto destacado */
--font-size-body: 16px;         /* Corpo de texto padrão */
--font-size-body-small: 14px;   /* Textos secundários */

/* Labels e UI */
--font-size-label: 13px;        /* Labels de formulário */
--font-size-caption: 12px;      /* Captions e metadados */

/* Preços */
--font-size-price: 18px;        /* Preços de produtos */
```

### Pesos de Fonte

```css
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-black: 900;       /* Usado em títulos principais */
```

### Alturas de Linha

```css
--line-height-tight: 1.1;       /* Títulos grandes */
--line-height-snug: 1.25;       /* Títulos médios */
--line-height-normal: 1.5;      /* Corpo de texto */
--line-height-relaxed: 1.625;   /* Textos longos */
```

### Estilos Tipográficos Pré-definidos

```css
/* Hero Title */
.hero-title {
  font-size: 80px;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

/* Section Title */
.section-title {
  font-size: 64px;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.01em;
  text-transform: uppercase;
}

/* Section Subtitle */
.section-subtitle {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-text-secondary);
}

/* Product Name */
.product-name {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.25;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

/* Price */
.price {
  font-size: 18px;
  font-weight: 700;
  color: var(--budlab-green);
}

/* Label Uppercase */
.label-uppercase {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--budlab-green);
}
```

---

## 📐 Espaçamentos

### Escala de Espaçamento

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;
--space-40: 160px;
```

### Aplicações Comuns

```css
/* Padding de Containers */
--container-padding-mobile: 16px;
--container-padding-tablet: 32px;
--container-padding-desktop: 64px;

/* Espaçamento entre Seções */
--section-spacing-mobile: 64px;
--section-spacing-desktop: 120px;

/* Grid Gap */
--grid-gap-small: 16px;
--grid-gap-medium: 24px;
--grid-gap-large: 32px;

/* Card Padding */
--card-padding-small: 16px;
--card-padding-medium: 24px;
--card-padding-large: 32px;
```

---

## 🎯 Componentes

### 1. Botões

#### Botão Primário (CTA)

```css
.button-primary {
  background-color: var(--budlab-green);
  color: var(--budlab-white);
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 16px 32px;
  border: none;
  border-radius: 0; /* Sem bordas arredondadas */
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.button-primary:hover {
  background-color: var(--budlab-green-dark);
}

.button-primary:active {
  background-color: var(--budlab-green-dark);
  transform: translateY(1px);
}
```

#### Botão Secundário (Outline)

```css
.button-secondary {
  background-color: transparent;
  color: var(--budlab-white);
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 16px 32px;
  border: 2px solid var(--budlab-white);
  border-radius: 0;
  cursor: pointer;
  transition: all 0.2s ease;
}

.button-secondary:hover {
  background-color: var(--budlab-white);
  color: var(--budlab-black);
}
```

#### Botão Link

```css
.button-link {
  background: none;
  border: none;
  color: var(--budlab-black);
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s ease;
}

.button-link:hover {
  color: var(--budlab-green);
}

.button-link::after {
  content: '→';
  font-size: 20px;
  transition: transform 0.2s ease;
}

.button-link:hover::after {
  transform: translateX(4px);
}
```

### 2. Cards de Produto

```css
.product-card {
  background-color: var(--budlab-gray-100);
  border: none;
  border-radius: 0;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.product-card-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  background-color: var(--budlab-white);
}

.product-card-content {
  padding: 20px;
}

.product-card-title {
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin-bottom: 8px;
  color: var(--budlab-black);
}

.product-card-price {
  font-size: 18px;
  font-weight: 700;
  color: var(--budlab-green);
}
```

### 3. Navegação (Header)

```css
.header {
  background-color: var(--budlab-white);
  border-bottom: 1px solid var(--color-border);
  padding: 20px 64px;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-menu {
  display: flex;
  gap: 40px;
  align-items: center;
}

.nav-link {
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--budlab-black);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--budlab-green);
}

.nav-link.active {
  font-weight: 700;
}
```

### 4. Logo

```css
.logo {
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--budlab-black);
}

.logo-subtitle {
  font-size: 10px;
  font-weight: 400;
  text-transform: lowercase;
  letter-spacing: 0.02em;
  margin-top: -4px;
}
```

### 5. Feature Cards (Seção Sobre)

```css
.feature-card {
  text-align: center;
  padding: 32px 24px;
}

.feature-card-number {
  width: 64px;
  height: 64px;
  background-color: var(--budlab-green);
  color: var(--budlab-black);
  font-size: 32px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.feature-card-title {
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 12px;
  color: var(--budlab-black);
}

.feature-card-description {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-text-secondary);
}
```

### 6. Section Header

```css
.section-header {
  margin-bottom: 64px;
}

.section-label {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--budlab-green);
  margin-bottom: 16px;
}

.section-title {
  font-size: 64px;
  font-weight: 900;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  margin-bottom: 24px;
}

.section-link {
  font-size: 16px;
  font-weight: 600;
  color: var(--budlab-black);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
```

### 7. CTA Section (Comunidade)

```css
.cta-section {
  background-color: var(--budlab-black);
  color: var(--budlab-white);
  padding: 80px 64px;
  text-align: center;
}

.cta-title {
  font-size: 48px;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.cta-title span {
  color: var(--budlab-green);
}

.cta-description {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}
```

### 8. Input Fields

```css
.input-field {
  font-family: var(--font-primary);
  font-size: 16px;
  padding: 12px 16px;
  border: 2px solid var(--color-border);
  border-radius: 0;
  background-color: var(--budlab-white);
  color: var(--budlab-black);
  transition: border-color 0.2s ease;
}

.input-field:focus {
  outline: none;
  border-color: var(--budlab-green);
}

.input-field::placeholder {
  color: var(--budlab-gray-700);
  opacity: 0.6;
}
```

### 9. Icon Buttons

```css
.icon-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--budlab-black);
  transition: color 0.2s ease;
}

.icon-button:hover {
  color: var(--budlab-green);
}
```

---

## 📱 Grid & Layout

### Breakpoints

```css
--breakpoint-mobile: 375px;
--breakpoint-tablet: 768px;
--breakpoint-desktop: 1024px;
--breakpoint-wide: 1440px;
```

### Container

```css
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 64px;
}

@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }
}
```

### Product Grid

```css
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
```

### Feature Grid

```css
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
}

@media (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
```

---

## 🎭 Animações & Transições

### Transições Base

```css
--transition-fast: 0.15s ease;
--transition-base: 0.2s ease;
--transition-slow: 0.3s ease;
```

### Efeitos Comuns

```css
/* Hover elevação */
.hover-lift {
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

/* Fade in */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.5s ease forwards;
}

/* Slide in from right */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

---

## 🖼️ Imagery Guidelines

### Proporções de Imagens

```css
--aspect-ratio-product: 1 / 1;      /* Quadrado para produtos */
--aspect-ratio-hero: 21 / 9;        /* Ultra-wide para hero */
--aspect-ratio-feature: 16 / 9;     /* Landscape para features */
```

### Tratamento de Imagens

- **Background de produtos:** Sempre fundo neutro (branco ou cinza claro)
- **Contraste:** Garantir contraste suficiente entre imagem e texto sobreposto
- **Qualidade:** Mínimo de 1200px de largura para imagens de produto

---

## ♿ Acessibilidade

### Contraste

- **Texto sobre fundo claro:** Mínimo contraste 4.5:1
- **Texto sobre fundo escuro:** Mínimo contraste 4.5:1
- **Botões e CTAs:** Mínimo contraste 3:1

### Estados de Foco

```css
*:focus-visible {
  outline: 2px solid var(--budlab-green);
  outline-offset: 2px;
}
```

### Textos Alternativos

- Todas as imagens devem ter `alt` text descritivo
- Ícones decorativos devem ter `aria-hidden="true"`

---

## 📏 Tokens de Design (Resumo Rápido)

```json
{
  "colors": {
    "primary": "#00B050",
    "black": "#000000",
    "white": "#FFFFFF",
    "gray": {
      "100": "#F5F5F5",
      "200": "#E5E5E5",
      "700": "#404040"
    }
  },
  "fonts": {
    "family": "'Helvetica Neue', Arial, sans-serif",
    "sizes": {
      "h1": "80px",
      "h2": "64px",
      "h3": "48px",
      "body": "16px",
      "small": "14px"
    },
    "weights": {
      "regular": 400,
      "medium": 500,
      "bold": 700,
      "black": 900
    }
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px",
    "2xl": "48px",
    "3xl": "64px",
    "4xl": "96px"
  },
  "radius": {
    "none": "0",
    "sm": "4px",
    "md": "8px",
    "lg": "12px"
  }
}
```

---

## 🎨 Princípios de Design

1. **Minimalismo Ousado:** Formas geométricas simples com tipografia forte e impactante
2. **Alto Contraste:** Uso predominante de preto, branco e verde vibrante
3. **Sem Bordas Arredondadas:** Design angular e direto refletindo atitude urbana
4. **Tipografia Dominante:** Texto em caixa alta para criar hierarquia visual forte
5. **Espaço Generoso:** Breathing room entre elementos para clareza e foco
6. **Autenticidade Urbana:** Estética streetwear com edge cultural

---

## 📦 Exemplos de Uso

### Hero Section

```html
<section class="hero">
  <div class="container">
    <span class="section-label">DESTAQUES</span>
    <h1 class="section-title">PRODUTOS EM ALTA</h1>
    <a href="#" class="button-link">VER TODOS</a>
  </div>
</section>
```

### Product Card

```html
<div class="product-card">
  <img src="product.jpg" alt="BUDLAB CREW" class="product-card-image">
  <div class="product-card-content">
    <h3 class="product-card-title">BUDLAB CREW</h3>
    <p class="product-card-price">R$ 109,99</p>
  </div>
</div>
```

---

**Notas de Implementação:**
- Sempre use caixa alta (uppercase) em títulos e labels
- Mantenha espaçamento generoso entre seções
- Priorize legibilidade e hierarquia visual clara
- O verde (#00B050) deve ser usado estrategicamente como acento, não dominando a interface
