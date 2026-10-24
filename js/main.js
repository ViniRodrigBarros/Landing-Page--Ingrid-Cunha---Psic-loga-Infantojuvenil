/**
 * ============================================================================
 * INGRID CUNHA — PSICÓLOGA INFANTOJUVENIL (CRP 13/12719)
 * Script Principal (ES6+ Vanilla JS)
 * ============================================================================
 */

'use strict';

/* ============================================================================
   1. CONFIGURAÇÃO CENTRALIZADA DO WHATSAPP (EDITAR EM UM ÚNICO LUGAR)
   Todos os botões de WhatsApp da página utilizam esta constante.
   ============================================================================ */
const WHATSAPP_CONFIG = Object.freeze({
  // [INSERIR NÚMERO] Formato internacional apenas com dígitos: 55 + DDD + Número (Ex.: '5583999999999')
  phone: '5500000000000',

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

document.addEventListener('DOMContentLoaded', () => {
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
});
