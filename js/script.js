/* =========================================================
   Saúde Mental, Qualidade de Vida e Bem-Estar
   Script principal
   Responsável por: menu mobile, controles de acessibilidade
   (tamanho de fonte e alto contraste), pequenas animações de
   revelação ao rolar, validação complementar do formulário de
   contato e marcação do ano no rodapé.
   ========================================================= */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    inicializarMenuMobile();
    inicializarAcessibilidade();
    inicializarRevelacaoAoRolar();
    inicializarFormularioContato();
    marcarAnoRodape();
  });

  /* ---------- Menu mobile ---------- */
  function inicializarMenuMobile() {
    var botao = document.querySelector(".botao-menu-mobile");
    var nav = document.querySelector(".nav-principal");
    if (!botao || !nav) return;

    botao.addEventListener("click", function () {
      var aberto = nav.classList.toggle("aberto");
      botao.setAttribute("aria-expanded", aberto ? "true" : "false");
    });

    // Fecha o menu ao clicar em um link (útil em telas pequenas)
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("aberto");
        botao.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Controles de acessibilidade ---------- */
  function inicializarAcessibilidade() {
    var raiz = document.documentElement;
    var LIMITE_MIN = 0.85;
    var LIMITE_MAX = 1.4;
    var PASSO = 0.1;

    var estadoSalvo = lerEstadoSalvo();
    aplicarEstado(estadoSalvo);

    var btnAumentar = document.querySelector("[data-a11y='aumentar-fonte']");
    var btnDiminuir = document.querySelector("[data-a11y='diminuir-fonte']");
    var btnContraste = document.querySelector("[data-a11y='alto-contraste']");
    var btnRestaurar = document.querySelector("[data-a11y='restaurar']");

    if (btnAumentar) {
      btnAumentar.addEventListener("click", function () {
        var escala = obterEscalaAtual();
        escala = Math.min(LIMITE_MAX, +(escala + PASSO).toFixed(2));
        raiz.style.setProperty("--escala-fonte", escala);
        salvarEstado();
      });
    }

    if (btnDiminuir) {
      btnDiminuir.addEventListener("click", function () {
        var escala = obterEscalaAtual();
        escala = Math.max(LIMITE_MIN, +(escala - PASSO).toFixed(2));
        raiz.style.setProperty("--escala-fonte", escala);
        salvarEstado();
      });
    }

    if (btnContraste) {
      btnContraste.addEventListener("click", function () {
        var ativo = raiz.classList.toggle("alto-contraste");
        btnContraste.setAttribute("aria-pressed", ativo ? "true" : "false");
        salvarEstado();
      });
    }

    if (btnRestaurar) {
      btnRestaurar.addEventListener("click", function () {
        raiz.style.removeProperty("--escala-fonte");
        raiz.classList.remove("alto-contraste");
        if (btnContraste) btnContraste.setAttribute("aria-pressed", "false");
        try {
          window.localStorage.removeItem("preferenciasAcessibilidade");
        } catch (erro) {
          /* armazenamento indisponível: segue sem persistir */
        }
      });
    }

    function obterEscalaAtual() {
      var valor = getComputedStyle(raiz).getPropertyValue("--escala-fonte");
      var numero = parseFloat(valor);
      return isNaN(numero) ? 1 : numero;
    }

    function salvarEstado() {
      try {
        var estado = {
          escala: obterEscalaAtual(),
          contraste: raiz.classList.contains("alto-contraste")
        };
        window.localStorage.setItem("preferenciasAcessibilidade", JSON.stringify(estado));
      } catch (erro) {
        /* armazenamento indisponível: preferência não será lembrada */
      }
    }

    function lerEstadoSalvo() {
      try {
        var bruto = window.localStorage.getItem("preferenciasAcessibilidade");
        return bruto ? JSON.parse(bruto) : null;
      } catch (erro) {
        return null;
      }
    }

    function aplicarEstado(estado) {
      if (!estado) return;
      if (estado.escala) raiz.style.setProperty("--escala-fonte", estado.escala);
      if (estado.contraste) {
        raiz.classList.add("alto-contraste");
        if (btnContraste) btnContraste.setAttribute("aria-pressed", "true");
      }
    }
  }

  /* ---------- Revelação suave ao rolar a página ---------- */
  function inicializarRevelacaoAoRolar() {
    var elementos = document.querySelectorAll(".revelar");
    if (!elementos.length) return;

    if (!("IntersectionObserver" in window)) {
      elementos.forEach(function (el) { el.classList.add("mostrar"); });
      return;
    }

    var observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("mostrar");
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elementos.forEach(function (el) { observador.observe(el); });
  }

  /* ---------- Formulário de contato ---------- */
  function inicializarFormularioContato() {
    var formulario = document.querySelector("#formulario-contato");
    if (!formulario) return;

    var mensagem = document.querySelector("#mensagem-envio");

    formulario.addEventListener("submit", function (evento) {
      // Validação HTML5 nativa é a principal; aqui apenas reforçamos
      // o feedback visual e impedimos o envio real (não há backend
      // nesta atividade acadêmica).
      if (!formulario.checkValidity()) {
        return; // deixa o navegador mostrar as mensagens nativas
      }
      evento.preventDefault();
      formulario.reset();
      if (mensagem) {
        mensagem.classList.add("visivel");
        mensagem.setAttribute("role", "status");
        mensagem.focus();
      }
    });
  }

  /* ---------- Ano no rodapé ---------- */
  function marcarAnoRodape() {
    var alvo = document.querySelector("#ano-atual");
    if (alvo) alvo.textContent = new Date().getFullYear();
  }
})();
