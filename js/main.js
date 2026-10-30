/**
 * ============================================================================
 * INGRID CUNHA — PSICÓLOGA INFANTOJUVENIL (CRP 13/12719)
 * Script Principal (ES6+ Vanilla JS)
 * ============================================================================
 */

'use strict';

// Garante scrollRestoration manual logo no carregamento do módulo
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Ao abrir ou recarregar a página (inclusive via bfcache), garante início no topo absoluto
window.addEventListener('pageshow', () => {
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
  window.scrollTo(0, 0);
});

// Antes de recarregar ou fechar, reseta para topo prevenindo que o navegador grave scrollY > 0
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

/* ============================================================================
   1. CONFIGURAÇÃO CENTRALIZADA DO WHATSAPP (EDITAR EM UM ÚNICO LUGAR)
   Todos os botões de WhatsApp da página utilizam esta constante.
   ============================================================================ */
const WHATSAPP_CONFIG = Object.freeze({
  // Número oficial de atendimento WhatsApp da psicóloga Ingrid Cunha: +55 (83) 98604-3830
  phone: '5583986043830',

  // Mensagem pré-preenchida editável em um só lugar:
  message:
    'Olá, Ingrid! Vi seu site e gostaria de tirar algumas dúvidas e saber sobre a disponibilidade de horários para atendimento.'
});

/**
 * Gera a URL oficial do WhatsApp com a mensagem codificada (padrão ou contextual)
 * @param {string} [customMessage] Mensagem contextual específica do botão clicado
 * @returns {string} URL completa para abertura no WhatsApp Web ou App
 */
function getWhatsAppUrl(customMessage) {
  const cleanPhone = WHATSAPP_CONFIG.phone.replace(/\D/g, '');
  const textToEncode =
    customMessage && customMessage.trim().length > 0
      ? customMessage.trim()
      : WHATSAPP_CONFIG.message;
  const encodedMessage = encodeURIComponent(textToEncode);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Aplica o link centralizado do WhatsApp em todos os CTAs com a classe .js-whatsapp-link,
 * respeitando mensagens contextuais definidas em [data-whatsapp-message]
 */
function initWhatsAppLinks() {
  const links = document.querySelectorAll('.js-whatsapp-link');

  links.forEach((link) => {
    const customMsg = link.getAttribute('data-whatsapp-message');
    link.setAttribute('href', getWhatsAppUrl(customMsg));
  });
}

/* ============================================================================
   2. MENU HAMBÚRGUER ACESSÍVEL (MOBILE COM FOCUS TRAP)
   ============================================================================ */
function initMobileMenu() {
  const toggleBtn = document.getElementById('btn-menu-mobile');
  const nav = document.getElementById('menu-principal');

  if (!toggleBtn || !nav) return;

  const navLinks = Array.from(nav.querySelectorAll('a'));

  function setMenuState(isOpen) {
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    toggleBtn.setAttribute(
      'aria-label',
      isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
    );
    nav.classList.toggle('is-open', isOpen);
  }

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    setMenuState(!isExpanded);
  });

  // Fecha o menu ao clicar em qualquer link de âncora
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  // Fecha o menu ao pressionar Escape e prende o foco (Tab / Shift+Tab) quando aberto no mobile
  document.addEventListener('keydown', (event) => {
    const modal = document.getElementById('privacy-modal');
    if (modal && !modal.hidden) return; // Prioriza o modal caso esteja aberto

    if (!nav.classList.contains('is-open')) return;

    if (event.key === 'Escape') {
      setMenuState(false);
      toggleBtn.focus();
      return;
    }

    if (event.key === 'Tab' && window.innerWidth < 1024 && navLinks.length > 0) {
      const focusable = [toggleBtn, ...navLinks];
      const firstEl = focusable[0];
      const lastEl = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === firstEl) {
        event.preventDefault();
        lastEl.focus();
      } else if (!event.shiftKey && document.activeElement === lastEl) {
        event.preventDefault();
        firstEl.focus();
      }
    }
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener('click', (event) => {
    if (
      nav.classList.contains('is-open') &&
      !nav.contains(event.target) &&
      !toggleBtn.contains(event.target)
    ) {
      setMenuState(false);
    }
  });

  // Garante estado limpo ao redimensionar para desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && nav.classList.contains('is-open')) {
      setMenuState(false);
    }
  });
}

/* ============================================================================
   3. FAQ ACCORDION ACESSÍVEL (TECLADO + ARIA + TRANSIÇÃO FLUIDA)
   ============================================================================ */
function initFaqAccordion() {
  const triggers = Array.from(document.querySelectorAll('.faq-trigger'));
  if (!triggers.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function closePanel(triggerToClose, panelToClose) {
    triggerToClose.setAttribute('aria-expanded', 'false');
    if (!panelToClose) return;

    if (prefersReduced) {
      panelToClose.hidden = true;
      panelToClose.classList.remove('is-open');
      return;
    }

    panelToClose.classList.remove('is-open');
    panelToClose.classList.add('is-closing');
    setTimeout(() => {
      panelToClose.hidden = true;
      panelToClose.classList.remove('is-closing');
    }, 280);
  }

  function openPanel(triggerToOpen, panelToOpen) {
    triggerToOpen.setAttribute('aria-expanded', 'true');
    if (!panelToOpen) return;

    panelToOpen.classList.remove('is-closing');
    panelToOpen.hidden = false;
    // Garante acionamento suave da transição do CSS Grid
    requestAnimationFrame(() => {
      panelToOpen.classList.add('is-open');
    });
  }

  triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const panelId = trigger.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;

      // Fecha os demais itens para manter leitura limpa e focada
      triggers.forEach((otherTrigger) => {
        if (otherTrigger !== trigger) {
          const otherPanelId = otherTrigger.getAttribute('aria-controls');
          const otherPanel = otherPanelId ? document.getElementById(otherPanelId) : null;
          if (otherTrigger.getAttribute('aria-expanded') === 'true') {
            closePanel(otherTrigger, otherPanel);
          }
        }
      });

      // Alterna o item clicado
      if (isExpanded) {
        closePanel(trigger, panel);
      } else {
        openPanel(trigger, panel);
      }
    });

    // Navegação por setas (WCAG Accordion Pattern)
    trigger.addEventListener('keydown', (event) => {
      let targetIndex = null;

      if (event.key === 'ArrowDown') {
        targetIndex = (index + 1) % triggers.length;
      } else if (event.key === 'ArrowUp') {
        targetIndex = (index - 1 + triggers.length) % triggers.length;
      } else if (event.key === 'Home') {
        targetIndex = 0;
      } else if (event.key === 'End') {
        targetIndex = triggers.length - 1;
      }

      if (targetIndex !== null) {
        event.preventDefault();
        triggers[targetIndex].focus();
      }
    });
  });
}

/* ============================================================================
   4. HEADER, SCROLL-SPY, BOTÃO FLUTUANTE E BARRA FIXA MOBILE AO ROLAR
   ============================================================================ */
function initScrollUI() {
  const header = document.getElementById('topo');
  const floatingWhatsapp = document.getElementById('floating-whatsapp');
  const mobileCtaBar = document.getElementById('mobile-cta-bar');
  const navLinks = Array.from(document.querySelectorAll('.main-nav .nav-link'));
  const trackedSections = navLinks
    .map((link) => {
      const href = link.getAttribute('href');
      return href && href.startsWith('#') ? document.querySelector(href) : null;
    })
    .filter(Boolean);

  let ticking = false;

  function updateOnScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    // Barra sutil de progresso de leitura no topo
    const progressBar = document.getElementById('reading-progress');
    if (progressBar) {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTotal > 0 ? (scrollY / scrollTotal) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }

    if (header) {
      header.classList.toggle('is-scrolled', scrollY > 20);
    }

    const showFloating = scrollY > 340;
    document.body.classList.toggle('has-floating-cta', showFloating);

    if (floatingWhatsapp) {
      floatingWhatsapp.classList.toggle('is-visible', showFloating);
    }

    if (mobileCtaBar) {
      mobileCtaBar.classList.toggle('is-visible', showFloating);
    }

    // Scroll-spy acessível (aria-current="true") para indicar a seção ativa
    if (trackedSections.length > 0) {
      const scrollPosition = scrollY + 180;
      let activeId = null;

      trackedSections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          activeId = `#${section.id}`;
        }
      });

      navLinks.forEach((link) => {
        if (link.getAttribute('href') === activeId) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }

    ticking = false;
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateOnScroll);
        ticking = true;
      }
    },
    { passive: true }
  );

  updateOnScroll();
}

/* ============================================================================
   5. ANIMAÇÕES DE ENTRADA SUTIS (INTERSECTION OBSERVER)
   ============================================================================ */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('[data-reveal]');
  if (!revealElements.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.12
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* ============================================================================
   6. AVISO DE PRIVACIDADE (LGPD) & MODAL DE POLÍTICA DE PRIVACIDADE
   ============================================================================ */
function initPrivacyAndLgpd() {
  const STORAGE_KEY = 'ingrid_cunha_lgpd_accepted_v1';
  const banner = document.getElementById('lgpd-banner');
  const acceptBtn = document.getElementById('accept-lgpd');
  const modal = document.getElementById('privacy-modal');
  const openModalFooterBtn = document.getElementById('open-privacy-modal');
  const openModalBannerBtn = document.getElementById('open-privacy-from-banner');
  const closeModalBtn = document.getElementById('close-privacy-modal');

  let lastFocusedElement = null;

  // Exibe o aviso discreto caso ainda não tenha sido aceito
  try {
    const isAccepted = localStorage.getItem(STORAGE_KEY) === 'true';
    if (!isAccepted && banner) {
      banner.hidden = false;
    }
  } catch (_) {
    // Caso localStorage esteja bloqueado no navegador, mantém discreto
  }

  if (acceptBtn && banner) {
    acceptBtn.addEventListener('click', () => {
      banner.hidden = true;
      try {
        localStorage.setItem(STORAGE_KEY, 'true');
      } catch (_) {
        // Ignora erro de storage restrito
      }
    });
  }

  function openModal() {
    if (!modal) return;

    // Fecha o menu mobile caso esteja aberto para evitar sobreposição de camadas
    const nav = document.getElementById('menu-principal');
    const toggleBtn = document.getElementById('btn-menu-mobile');
    if (nav && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.setAttribute('aria-label', 'Abrir menu de navegação');
      }
    }

    lastFocusedElement = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    if (closeModalBtn) closeModalBtn.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  if (openModalFooterBtn) {
    openModalFooterBtn.addEventListener('click', openModal);
  }

  if (openModalBannerBtn) {
    openModalBannerBtn.addEventListener('click', openModal);
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (!modal || modal.hidden) return;

    if (event.key === 'Escape') {
      closeModal();
      return;
    }

    // Focus trap acessível (WCAG 2.1.2 / 2.4.3) dentro do modal aberto
    if (event.key === 'Tab') {
      const focusableElements = Array.from(
        modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute('disabled'));

      if (focusableElements.length === 0) return;

      const firstEl = focusableElements[0];
      const lastEl = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstEl) {
        event.preventDefault();
        lastEl.focus();
      } else if (!event.shiftKey && document.activeElement === lastEl) {
        event.preventDefault();
        firstEl.focus();
      }
    }
  });
}

/* ============================================================================
   7. RASTREAMENTO DE CONVERSÃO (GTM / GA4 E META PIXEL)
   Dispara eventos automaticamente em todos os elementos com [data-track]
   ============================================================================ */
function initConversionTracking() {
  const trackedElements = document.querySelectorAll('[data-track]');

  trackedElements.forEach((element) => {
    element.addEventListener('click', () => {
      const actionName = element.getAttribute('data-track');
      if (!actionName) return;

      // Envio para Google Tag Manager / Google Analytics 4 (dataLayer)
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: 'cta_click',
          cta_location: actionName,
          cta_text: (element.textContent || '').trim()
        });
      }

      // Envio para Meta Pixel (Contact / Lead)
      if (typeof window.fbq === 'function' && actionName.includes('whatsapp')) {
        window.fbq('track', 'Contact', {
          content_name: actionName
        });
      }
    });
  });
}

/* ============================================================================
   8. MICROINTERAÇÕES DE DELIGHT: CÓPIA COM TOAST & TILT ORGÂNICO DO HERO
   ============================================================================ */
function initCopyActions() {
  const copyButtons = document.querySelectorAll('.js-copy-btn');
  const toast = document.getElementById('delight-toast');
  let toastTimeout = null;

  function showToast(message) {
    if (!toast) return;

    toast.innerHTML = `<span class="delight-toast-check" aria-hidden="true">&check;</span> <span>${message}</span>`;
    toast.classList.add('is-active');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('is-active');
    }, 2400);
  }

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`${textToCopy} copiado!`);
      } catch (_) {
        showToast(`${textToCopy}`);
      }
    });
  });
}

function initHeroScrapbookTilt() {
  const heroFrame = document.querySelector('.hero-photo-frame');
  if (!heroFrame) return;

  const isFinePointer = window.matchMedia('(pointer: fine)').matches;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!isFinePointer || prefersReduced) return;

  heroFrame.addEventListener('mousemove', (e) => {
    const rect = heroFrame.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -2.5;
    const rotateY = ((x - centerX) / centerX) * 2.5;

    heroFrame.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  });

  heroFrame.addEventListener('mouseleave', () => {
    heroFrame.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
    heroFrame.style.transition = 'transform 360ms var(--ease-out-expo)';
  });

  heroFrame.addEventListener('mouseenter', () => {
    heroFrame.style.transition = 'none';
  });
}

/* ============================================================================
   9. ANO ATUAL NO RODAPÉ E INICIALIZAÇÃO
   ============================================================================ */
function initCurrentYear() {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }
}

/* ============================================================================
   10. NAVEGAÇÃO DE ÂNCORAS E SCROLL CONTROLADO
   - O scroll até a seção central só acontece por interação explícita do usuário
     (ao clicar em "Ver como funciona" ou nos links de navegação).
   - O clique rola suavemente até a seção de destino.
   - Mantém a URL livre do hash para que F5 / recarregar nunca pule para o meio.
   ============================================================================ */
function initAnchorNavigation() {
  const isReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#' || link.classList.contains('skip-link')) return;

      const target = href === '#topo' ? document.body : document.querySelector(href);
      if (!target) return;

      event.preventDefault();

      const behavior = isReducedMotion() ? 'auto' : 'smooth';

      if (href === '#topo') {
        window.scrollTo({ top: 0, behavior });
      } else {
        target.scrollIntoView({ behavior, block: 'start' });
      }

      // Limpa qualquer hash residual da barra de endereço para proteger recarregamentos
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    });
  });
}

/* ============================================================================
   11. REEXECUÇÃO DO DESENHO EM GIZ DO HERO (OVERDRIVE)
   - Observa o componente visual diretamente (.hero-visual), garantindo que no
     celular a animação só dispare quando a ilustração realmente entrar na tela,
     evitando renderizar antes de o usuário chegar até ela.
   - No desktop, como o visual fica ao lado do texto, dispara na carga inicial.
   - Ao sair da tela (subindo ou descendo), remove a classe e reseta os traços
     para permitir replay completo toda vez que o usuário retornar à ilustração.
   - Escopo exclusivo da ilustração do Hero; nenhuma outra seção é afetada.
   ============================================================================ */
function initHeroChalkReplay() {
  const heroVisual = document.querySelector('.hero-visual');
  if (!heroVisual) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || !('IntersectionObserver' in window)) {
    heroVisual.classList.add('is-chalk-active');
    return;
  }

  // Observa o próprio componente visual (.hero-visual) com threshold adequado:
  // No mobile, só dispara quando pelo menos 20% da ilustração estiver visível na tela.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          heroVisual.classList.add('is-chalk-active');
        } else {
          heroVisual.classList.remove('is-chalk-active');
        }
      });
    },
    {
      root: null,
      threshold: 0.2
    }
  );

  observer.observe(heroVisual);
}

/* ============================================================================
   11. OVERDRIVE: THROW DECK INTERATIVO DE FOTOS E RECURSOS TERAPÊUTICOS
   Física de molas em Vanilla JS (60fps), gestos touch com bloqueio vertical,
   traçado dinâmico em giz e suporte a acessibilidade (WCAG AA).
   ============================================================================ */
function initThrowDeck() {
  const viewport = document.getElementById('deck-viewport');
  const track = document.getElementById('deck-track');
  const countEl = document.getElementById('deck-count');
  const prevBtn = document.getElementById('deck-btn-prev');
  const nextBtn = document.getElementById('deck-btn-next');
  const chalkContour = document.getElementById('deck-chalk-contour');

  if (!viewport || !track) return;

  const cardElements = Array.from(track.querySelectorAll('.deck-sheet'));
  const count = cardElements.length;
  if (count === 0) return;

  // Parâmetros de física e molas (compatíveis com 60fps em mobile e desktop)
  const TILTS = [0, -2.2, 1.8, -1.2];
  const SLOT_Y = 8;
  const SLOT_SCALE = 0.035;
  const MAX_SLOT = TILTS.length - 1;

  const MAX_DRAG_ROTATION = 16;
  const THROW_VELOCITY = 0.45;
  const THROW_DISTANCE = 0.32;
  const TAP_SLOP = 6;
  const VELOCITY_WINDOW = 90;

  const HOME = { k: 420, c: 30 };
  const FLIGHT = { k: 150, c: 15 };
  const RETURN = { k: 240, c: 26 };
  const TOP_Z = 1000;

  function slotPose(depth) {
    const d = Math.min(depth, MAX_SLOT);
    return {
      x: 0,
      y: d * SLOT_Y,
      r: TILTS[d] || 0,
      s: 1 - d * SLOT_SCALE
    };
  }

  function lerpPose(a, b, t) {
    return {
      x: a.x + (b.x - a.x) * t,
      y: a.y + (b.y - a.y) * t,
      r: a.r + (b.r - a.r) * t,
      s: a.s + (b.s - a.s) * t
    };
  }

  function poseTransform(p) {
    return `translate3d(${p.x.toFixed(2)}px, ${p.y.toFixed(2)}px, 0) rotate(${p.r.toFixed(3)}deg) scale(${p.s.toFixed(4)})`;
  }

  function makeBody(depth) {
    const pose = slotPose(depth);
    return {
      ...pose,
      vx: 0,
      vy: 0,
      vr: 0,
      vs: 0,
      phase: 'rest',
      out: pose,
      dx: 1,
      dy: 0,
      z: null,
      apexZ: null
    };
  }

  function springAxis(value, velocity, target, spring, dt) {
    const accel = -spring.k * (value - target) - spring.c * velocity;
    const v = velocity + accel * dt;
    return [value + v * dt, v];
  }

  function stepBody(body, target, dt) {
    let spring = HOME;
    if (body.phase === 'out') spring = FLIGHT;
    else if (body.phase === 'return') spring = RETURN;

    const steps = Math.max(1, Math.ceil(dt * 240));
    const h = dt / steps;
    for (let i = 0; i < steps; i++) {
      [body.x, body.vx] = springAxis(body.x, body.vx, target.x, spring, h);
      [body.y, body.vy] = springAxis(body.y, body.vy, target.y, spring, h);
      [body.r, body.vr] = springAxis(body.r, body.vr, target.r, spring, h);
      [body.s, body.vs] = springAxis(body.s, body.vs, target.s, spring, h);
    }
  }

  function isSettled(body, target) {
    return (
      Math.abs(body.x - target.x) < 0.1 &&
      Math.abs(body.y - target.y) < 0.1 &&
      Math.abs(body.r - target.r) < 0.02 &&
      Math.abs(body.s - target.s) < 0.0005 &&
      Math.abs(body.vx) + Math.abs(body.vy) < 2 &&
      Math.abs(body.vr) < 1 &&
      Math.abs(body.vs) < 0.01
    );
  }

  function clearance(w, h, ux, uy) {
    const along = Math.min(
      ux === 0 ? Infinity : w / Math.abs(ux),
      uy === 0 ? Infinity : h / Math.abs(uy)
    );
    return along + 32;
  }

  function releaseVelocity(samples) {
    const lastSample = samples[samples.length - 1];
    const firstSample = samples.find(s => lastSample && lastSample.t - s.t <= VELOCITY_WINDOW);
    if (!firstSample || !lastSample || lastSample.t - firstSample.t < 8) {
      return { vx: 0, vy: 0 };
    }
    const dt = lastSample.t - firstSample.t;
    return {
      vx: (lastSample.x - firstSample.x) / dt,
      vy: (lastSample.y - firstSample.y) / dt
    };
  }

  // Estado do deck
  let order = Array.from({ length: count }, (_, i) => i);
  let bodies = order.map(i => makeBody(i));
  let drag = null;
  let progress = 0;
  let rafId = 0;
  let lastTime = 0;
  let chalkTimeout = null;

  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let isReducedMotion = reducedMotionQuery.matches;
  reducedMotionQuery.addEventListener('change', e => {
    isReducedMotion = e.matches;
  });

  function write(index, depth) {
    const node = cardElements[index];
    const body = bodies[index];
    if (!node || !body) return;

    node.style.transform = poseTransform(body);
    node.style.zIndex = String(body.z ?? (order.length - depth));
    const isTop = depth === 0;
    node.setAttribute('aria-hidden', String(!isTop));
    if (isTop) {
      node.removeAttribute('tabindex');
    } else {
      node.setAttribute('tabindex', '-1');
    }
  }

  function targetFor(body, depth) {
    if (body.phase === 'out') return body.out;
    const pose = slotPose(depth);
    if (depth > 0 && progress > 0) {
      return lerpPose(pose, slotPose(depth - 1), progress * 0.6);
    }
    return pose;
  }

  function advance(index, depth, dt) {
    const body = bodies[index];
    if (!body) return false;

    if (body.phase === 'drag') {
      write(index, depth);
      return true;
    }

    if (isReducedMotion && body.phase === 'out') {
      body.phase = 'rest';
      body.z = null;
    }

    const target = targetFor(body, depth);
    if (isReducedMotion) {
      Object.assign(body, target, { vx: 0, vy: 0, vr: 0, vs: 0 });
    } else {
      stepBody(body, target, dt);
    }

    if (body.phase === 'out' && body.vx * body.dx + body.vy * body.dy <= 0) {
      body.phase = 'return';
      body.z = body.apexZ;
    }

    const settled = isSettled(body, target);
    if (settled && body.phase !== 'out') {
      body.phase = 'rest';
      body.z = null;
    }

    write(index, depth);
    return !settled;
  }

  function tick(now) {
    const dt = Math.min((now - lastTime) / 1000, 1 / 30);
    lastTime = now;
    let active = false;
    order.forEach((index, depth) => {
      if (advance(index, depth, dt)) {
        active = true;
      }
    });
    rafId = active ? requestAnimationFrame(tick) : 0;
  }

  function kick() {
    if (rafId) return;
    lastTime = performance.now();
    rafId = requestAnimationFrame(tick);
  }

  function triggerChalkAnimation() {
    if (!chalkContour || isReducedMotion) return;
    const topCard = cardElements[order[0]];
    const badge = topCard ? topCard.querySelector('.deck-sheet-badge') : null;
    let color = '#E9A4A8';
    if (badge) {
      if (badge.classList.contains('deck-badge--sky')) color = '#76C2D0';
      else if (badge.classList.contains('deck-badge--vanilla')) color = '#E8B87C';
    }

    chalkContour.style.setProperty('--chalk-accent', color);
    chalkContour.classList.remove('is-drawing');
    void chalkContour.offsetWidth; // Dispara reflow para reiniciar keyframe SVG
    chalkContour.classList.add('is-drawing');

    clearTimeout(chalkTimeout);
    chalkTimeout = setTimeout(() => {
      chalkContour.classList.remove('is-drawing');
    }, 750);
  }

  function updateUI() {
    if (countEl) {
      const topIdx = order[0] + 1;
      countEl.textContent = `${String(topIdx).padStart(2, '0')} / ${String(count).padStart(2, '0')}`;
    }
    triggerChalkAnimation();
  }

  function commitOrder(nextOrder) {
    order = nextOrder;
    updateUI();
    kick();
  }

  function throwTop(vx, vy, fx, fy) {
    const index = order[0];
    if (index === undefined || order.length < 2) return;
    const body = bodies[index];
    const node = cardElements[index];
    if (!body || !node) return;

    const speed = Math.hypot(vx, vy);
    const rawX = speed > 0.05 ? vx : fx;
    const rawY = speed > 0.05 ? vy : fy;
    const norm = Math.hypot(rawX, rawY) || 1;
    const ux = rawX / norm;
    const uy = rawY / norm;
    const w = node.offsetWidth || 340;
    const h = node.offsetHeight || 480;
    const distance = clearance(w, h, ux, uy) + Math.min(speed * 50, 100);
    const launch = Math.max(speed, 0.95) * 1000;

    body.phase = 'out';
    body.dx = ux;
    body.dy = uy;
    body.out = {
      x: ux * distance,
      y: uy * distance,
      r: Math.max(-36, Math.min(36, body.r + ux * 24)),
      s: 1
    };
    body.vx = ux * launch;
    body.vy = uy * launch;
    body.vr += ux * launch * 0.045;
    body.z = TOP_Z;
    body.apexZ = null;

    commitOrder([...order.slice(1), index]);
  }

  function bringBack() {
    const index = order[order.length - 1];
    if (index === undefined || order.length < 2) return;
    const body = bodies[index];
    const node = cardElements[index];
    if (!body || !node) return;

    const ux = -0.96;
    const uy = -0.26;
    const w = node.offsetWidth || 340;
    const h = node.offsetHeight || 480;
    const distance = clearance(w, h, ux, uy) + 24;

    body.phase = 'out';
    body.dx = ux;
    body.dy = uy;
    body.out = { x: ux * distance, y: uy * distance, r: -16, s: 1 };
    body.vx = ux * 1100;
    body.vy = uy * 1100;
    body.z = 0;
    body.apexZ = TOP_Z - 1;

    commitOrder([index, ...order.slice(0, -1)]);
  }

  function cycle(direction) {
    if (direction === 1) {
      throwTop(1.25, -0.3, 1, 0);
    } else {
      bringBack();
    }
  }

  // Manipulação de Gestos e Toque com Bloqueio de Eixo Vertical
  cardElements.forEach((card, index) => {
    card.addEventListener('pointerdown', e => {
      if (drag || order[0] !== index) return;
      if (e.pointerType === 'mouse' && e.button !== 0) return;

      const body = bodies[index];
      if (!body) return;
      const rect = card.getBoundingClientRect();
      try {
        card.setPointerCapture(e.pointerId);
      } catch (_) {}
      card.classList.add('is-dragging');

      drag = {
        pointerId: e.pointerId,
        index,
        startX: e.clientX,
        startY: e.clientY,
        baseX: body.x,
        baseY: body.y,
        width: card.offsetWidth,
        lever: e.clientY - rect.top < rect.height / 2 ? 1 : -1,
        moved: false,
        samples: [{ t: e.timeStamp, x: e.clientX, y: e.clientY }]
      };
    });

    card.addEventListener('pointermove', e => {
      if (!drag || drag.pointerId !== e.pointerId) return;
      const dx = e.clientX - drag.startX;
      const dy = e.clientY - drag.startY;

      if (!drag.moved) {
        if (Math.hypot(dx, dy) < TAP_SLOP) return;

        // Bloqueio de eixo touch: se o gesto for predominantemente vertical, libera para scroll nativo da página
        if (e.pointerType !== 'mouse' && Math.abs(dy) > Math.abs(dx)) {
          drag = null;
          card.classList.remove('is-dragging');
          try {
            if (card.hasPointerCapture(e.pointerId)) {
              card.releasePointerCapture(e.pointerId);
            }
          } catch (_) {}
          return;
        }
      }

      const body = bodies[drag.index];
      if (!body) return;

      drag.moved = true;
      drag.samples.push({ t: e.timeStamp, x: e.clientX, y: e.clientY });
      if (drag.samples.length > 24) drag.samples.shift();

      body.phase = 'drag';
      body.x = drag.baseX + dx;
      body.y = drag.baseY + dy;
      body.s = 1;
      body.r = Math.max(-1, Math.min(1, body.x / drag.width)) * MAX_DRAG_ROTATION * drag.lever;
      body.vx = 0;
      body.vy = 0;
      body.vr = 0;
      body.vs = 0;

      progress = Math.min(Math.hypot(body.x, body.y) / (drag.width * THROW_DISTANCE), 1);
      kick();
    });

    function handlePointerEnd(e, cancelled) {
      if (!drag || drag.pointerId !== e.pointerId) return;
      const currentDrag = drag;
      drag = null;
      progress = 0;
      card.classList.remove('is-dragging');

      try {
        if (card.hasPointerCapture(e.pointerId)) {
          card.releasePointerCapture(e.pointerId);
        }
      } catch (_) {}

      const body = bodies[currentDrag.index];
      if (!body || !currentDrag.moved) {
        if (body) body.phase = 'rest';
        kick();
        return;
      }

      if (cancelled) {
        body.phase = 'rest';
        kick();
        return;
      }

      const { vx, vy } = releaseVelocity(currentDrag.samples);
      const speed = Math.hypot(vx, vy);
      const distance = Math.hypot(body.x, body.y);
      const heading = distance > 0 ? (vx * body.x + vy * body.y) / distance : 0;
      const fast = speed > THROW_VELOCITY && heading > -0.2;
      const far = distance > currentDrag.width * THROW_DISTANCE && heading > -0.3;

      if (fast || far) {
        throwTop(vx, vy, body.x / (distance || 1), body.y / (distance || 1));
        return;
      }

      body.phase = 'rest';
      body.vx = vx * 1000;
      body.vy = vy * 1000;
      body.vr = ((vx * 1000) / currentDrag.width) * MAX_DRAG_ROTATION * currentDrag.lever;
      kick();
    }

    card.addEventListener('pointerup', e => handlePointerEnd(e, false));
    card.addEventListener('pointercancel', e => handlePointerEnd(e, true));
    card.addEventListener('lostpointercapture', e => handlePointerEnd(e, true));

    // Suporte a teclado
    card.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        cycle(1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        cycle(-1);
      }
    });
  });

  // Botões de navegação
  if (prevBtn) {
    prevBtn.addEventListener('click', e => {
      e.preventDefault();
      cycle(-1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', e => {
      e.preventDefault();
      cycle(1);
    });
  }

  // Posição inicial dos cartões e ativação da UI
  order.forEach((index, depth) => {
    write(index, depth);
  });
  updateUI();
  kick();
}

document.addEventListener('DOMContentLoaded', () => {
  // Limpa qualquer hash existente na entrada e fixa o topo absoluto
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
  window.scrollTo(0, 0);

  initWhatsAppLinks();
  initMobileMenu();
  initFaqAccordion();
  initScrollUI();
  initScrollReveal();
  initPrivacyAndLgpd();
  initConversionTracking();
  initCopyActions();
  initHeroScrapbookTilt();
  initCurrentYear();
  initAnchorNavigation();
  initHeroChalkReplay();
  initThrowDeck();
});

// Garante topo absoluto mesmo após o carregamento completo de imagens e fontes
window.addEventListener('load', () => {
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
  if (window.scrollY !== 0) {
    window.scrollTo(0, 0);
  }
});
