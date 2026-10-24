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
 * Gera a URL oficial do WhatsApp com a mensagem codificada
 * @returns {string} URL completa para abertura no WhatsApp Web ou App
 */
function getWhatsAppUrl() {
  const cleanPhone = WHATSAPP_CONFIG.phone.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(WHATSAPP_CONFIG.message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Aplica o link centralizado do WhatsApp em todos os CTAs com a classe .js-whatsapp-link
 */
function initWhatsAppLinks() {
  const whatsappUrl = getWhatsAppUrl();
  const links = document.querySelectorAll('.js-whatsapp-link');

  links.forEach((link) => {
    link.setAttribute('href', whatsappUrl);
  });
}

/* ============================================================================
   2. MENU HAMBÚRGUER ACESSÍVEL (MOBILE)
   ============================================================================ */
function initMobileMenu() {
  const toggleBtn = document.getElementById('btn-menu-mobile');
  const nav = document.getElementById('menu-principal');

  if (!toggleBtn || !nav) return;

  const navLinks = nav.querySelectorAll('a');

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

  // Fecha o menu ao pressionar Escape e devolve o foco ao botão
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setMenuState(false);
      toggleBtn.focus();
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
   3. FAQ ACCORDION ACESSÍVEL (TECLADO + ARIA)
   ============================================================================ */
function initFaqAccordion() {
  const triggers = Array.from(document.querySelectorAll('.faq-trigger'));
  if (!triggers.length) return;

  triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const panelId = trigger.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;

      // Fecha os demais itens para manter leitura limpa e focada
      triggers.forEach((otherTrigger) => {
        if (otherTrigger !== trigger) {
          otherTrigger.setAttribute('aria-expanded', 'false');
          const otherPanelId = otherTrigger.getAttribute('aria-controls');
          const otherPanel = otherPanelId ? document.getElementById(otherPanelId) : null;
          if (otherPanel) otherPanel.hidden = true;
        }
      });

      // Alterna o item clicado
      trigger.setAttribute('aria-expanded', String(!isExpanded));
      if (panel) {
        panel.hidden = isExpanded;
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
   4. HEADER, BOTÃO FLUTUANTE E BARRA FIXA MOBILE AO ROLAR
   ============================================================================ */
function initScrollUI() {
  const header = document.getElementById('topo');
  const floatingWhatsapp = document.getElementById('floating-whatsapp');
  const mobileCtaBar = document.getElementById('mobile-cta-bar');

  let ticking = false;

  function updateOnScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    if (header) {
      header.classList.toggle('is-scrolled', scrollY > 20);
    }

    const showFloating = scrollY > 340;

    if (floatingWhatsapp) {
      floatingWhatsapp.classList.toggle('is-visible', showFloating);
    }

    if (mobileCtaBar) {
      mobileCtaBar.classList.toggle('is-visible', showFloating);
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
    if (event.key === 'Escape' && modal && !modal.hidden) {
      closeModal();
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
   8. ANO ATUAL NO RODAPÉ E INICIALIZAÇÃO
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
  initCurrentYear();
});
