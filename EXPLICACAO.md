# Mente em Equilíbrio — Guia para explicar o código

## Estrutura de pastas

```
site/
├── index.html      → o conteúdo e a estrutura da página (HTML)
├── css/style.css   → a aparência: cores, tamanhos, animações (CSS)
└── js/script.js    → o comportamento: menu, abertura, acessibilidade (JavaScript)
```

**Ideia para explicar:** HTML é o *esqueleto*, CSS é a *roupa*, JavaScript é o *movimento*.
O `index.html` liga os outros dois com estas duas linhas:

| Linha | O que faz |
|---|---|
| `<link rel="stylesheet" href="css/style.css">` | Carrega o arquivo de estilos dentro do `<head>` |
| `<script src="js/script.js"></script>` | Carrega o JavaScript no final do `<body>`, depois que todo o HTML já existe |

---

## 1. index.html — linha por linha (por blocos)

### Cabeçalho do documento (`<head>`)
| Código | O que faz |
|---|---|
| `<!DOCTYPE html>` | Avisa ao navegador que é HTML5 |
| `<html lang="pt-BR">` | Define o idioma (ajuda leitores de tela e tradutores) |
| `<meta charset="UTF-8">` | Permite acentos e símbolos (ç, ã, é) |
| `<meta name="viewport" ...>` | Faz o site se ajustar à tela do celular |
| `<meta name="theme-color">` | Cor da barra do navegador no celular |
| `<title>` | Texto da aba do navegador |
| `<meta name="description">` | Resumo mostrado em buscadores como o Google |
| `<link rel="stylesheet">` | Liga o CSS |

### Corpo (`<body class="intro-ativa">`)
A classe `intro-ativa` trava a rolagem enquanto a abertura animada aparece. O JavaScript remove essa classe no final.

| Bloco | O que é |
|---|---|
| `<section class="abertura-inicial">` | Tela de abertura com 3 mensagens que trocam sozinhas ("Um momento para respirar" → "Cuidar da mente é cuidar da vida" → "Vamos começar?"). Tem o botão **Pular abertura** |
| `<svg class="sprite">` com vários `<symbol>` | "Caixa de ícones": cada `<symbol id="i-coracao">` é um ícone desenhado em SVG uma única vez e reaproveitado em todo o site |
| `<a class="pular-conteudo">` | Link invisível que só aparece com a tecla Tab; leva direto ao conteúdo (acessibilidade) |
| `<header class="cabecalho">` | Logo + menu de navegação |
| `<input type="checkbox" id="menu-check">` + `<label>` | Truque de CSS: o botão "Menu" do celular abre e fecha usando uma caixinha marcada/desmarcada, sem precisar de JavaScript |
| `<nav class="menu">` | Lista de links (`<a href="#saude-mental">`) que rolam até cada seção pelo **id** |
| `<main id="conteudo">` | Conteúdo principal da página |

### Seções dentro do `<main>`
Cada `<section>` tem um `id` (para o menu levar até ela) e um `aria-labelledby` (liga a seção ao título dela para leitores de tela).

1. **`#inicio` (hero)** — título principal `<h1>`, texto de apoio, dois botões e a ilustração animada em SVG (colinas, sol, planta, folhas caindo). O cartão "Respire com a gente" alterna *inspire / expire*.
2. **`#saude-mental`** — 3 cartões: bem-estar emocional, psicológico e social.
3. **`#qualidade-de-vida`** — 3 cartões: autocuidado, equilíbrio emocional, hábitos.
4. **`#habitos`** — 4 cartões: sono, atividade física, alimentação, relações sociais.
5. **`#prevencao`** — 4 passos de cuidado.
6. **`#impacto-social`** — cartões sobre conscientização, preconceito, empatia, mais uma citação em `<blockquote>`.
7. **`#acessibilidade`** — explica acessibilidade e tem os **botões que funcionam com JavaScript** (aumentar/diminuir texto, alto contraste, restaurar).
8. **`#duvidas`** — perguntas e respostas usando `<details>` e `<summary>`: o próprio HTML abre e fecha a resposta, sem JavaScript.
9. **`#galeria`** — 6 fotos reais com legenda (`<figure>` + `<img>` + `<figcaption>`).
10. **Faixa de foto** — imagem grande de natureza com uma frase, antes do apoio.
11. **`#apoio`** — CVV (telefone 188) com link `tel:188`, que liga direto no celular.

### Como é um cartão (se repete no site todo)
```html
<article class="cartao">                       <!-- caixa do cartão -->
  <svg class="icone"><use href="#i-folha"/></svg>  <!-- reaproveita o ícone da "caixa de ícones" -->
  <h3>Autocuidado</h3>                         <!-- título do cartão -->
  <p>Texto explicativo.</p>                    <!-- descrição -->
</article>
```

### Como é uma foto da galeria
```html
<figure class="foto">
  <img src="..." alt="Descrição da foto" loading="lazy" width="800" height="560">
  <figcaption><strong>Título</strong>Legenda</figcaption>
</figure>
```
| Atributo | Para que serve |
|---|---|
| `src` | Endereço da foto (aqui vem do Unsplash, com `w=800` para vir leve) |
| `alt` | Descrição para leitores de tela e para quando a foto não carrega |
| `loading="lazy"` | Só baixa a foto quando o usuário rola até ela (site mais rápido) |
| `width` / `height` | Reserva o espaço da foto antes de carregar, evitando a página "pular" |

### Rodapé (`<footer>`)
Nome do projeto, duas listas de links e os direitos autorais.

---

## 2. css/style.css — o que cada bloco faz

### 1. Base
| Código | O que faz |
|---|---|
| `:root { --verde-escuro: #315C4B; ... }` | **Variáveis de cor e fonte**. Mudou a cor aqui, muda no site inteiro |
| `* , *::before, *::after { box-sizing: border-box; }` | Faz padding e borda serem contados *dentro* da largura do elemento |
| `html { scroll-behavior: smooth; }` | Rolagem suave ao clicar nos links do menu (só se o usuário não pediu menos movimento) |
| `body { ... }` | Fonte, tamanho, espaçamento entre linhas (`line-height: 1.7`), cor do texto e fundo |
| `h1, h2, h3 { ... }` | Fonte serifada dos títulos, cor e espaçamento |
| `[id] { scroll-margin-top: ... }` | Evita que o cabeçalho fixo cubra o título da seção ao rolar |
| `.container` | Centraliza o conteúdo com largura máxima de 1180px |
| `:focus-visible` | Contorno visível ao navegar pelo teclado |
| `.pular-conteudo` | Esconde o link fora da tela (`left: -9999px`) e o traz de volta com `:focus` |

### 2. Cabeçalho
| Código | O que faz |
|---|---|
| `position: sticky; top: 0` | O cabeçalho fica grudado no topo ao rolar |
| `backdrop-filter: blur(10px)` | Efeito de vidro fosco atrás do cabeçalho |
| `display: flex; justify-content: space-between` | Logo à esquerda, menu à direita |
| `.menu-check` | Caixa de seleção escondida (mas ainda acessível pelo teclado) |
| `.menu-botao-barras::before/::after` | Desenha as 3 barrinhas do "hambúrguer" e, quando marcado, giram formando um **X** |
| `.menu { display: none }` / `.menu-check:checked ~ .menu { display: block }` | Menu escondido, e aparece quando a caixinha está marcada |
| `.menu a[aria-current="true"]` | Destaca em verde o link da seção que está na tela (marcado pelo JS) |

### 3. Botões
`.botao` define o formato arredondado (`border-radius: 999px`); `.botao-primario` (verde cheio) e `.botao-secundario` (claro). `transition` + `:hover` fazem o botão subir 2px ao passar o mouse. `.botao-seta::after { content: "\2193" }` desenha a setinha ↓.

### 4. Hero (abertura do site)
| Código | O que faz |
|---|---|
| `min-height: calc(100svh - var(--altura-cabecalho))` | Ocupa a altura da tela menos o cabeçalho |
| `background: radial-gradient(...)` | Fundo com manchas suaves de verde e azul |
| `.hero-grade { display: grid }` | Texto e ilustração; no computador ficam lado a lado |
| `clamp(2.5rem, 9.5vw, 4.9rem)` | Tamanho de fonte que cresce com a tela, com mínimo e máximo |
| `.sol`, `.planta`, `.folha`, `.passaro` | Cada parte da ilustração recebe sua animação |
| `.respire` | Cartão flutuante sobre a ilustração (`position: absolute`) |
| `.onda` | Divisória em curva entre o hero e a próxima seção |

### 5. Seções e cartões
| Código | O que faz |
|---|---|
| `.secao { padding: 4rem 0 }` | Espaço em cima e embaixo |
| `.secao-branca / -bege / -verde` | Alterna o fundo das seções para separar visualmente |
| `.secao-titulo h2::after` | Linha verde decorativa embaixo do título (sem precisar de HTML extra) |
| `.grade { display: grid; gap: 1.25rem }` | Distribui os cartões em colunas |
| `.cartao:hover` | Cartão sobe 4px, ganha sombra e muda para azul ao passar o mouse |
| `.cartao:hover .icone` | O ícone gira levemente |

### 6. Impacto, Acessibilidade e Galeria
`.frase` é a citação em fundo verde-escuro. `.painel` é a caixa dos botões de acessibilidade. `.galeria` usa grid de 1, 2 ou 3 colunas conforme a tela.

### 7. Dúvidas
`.duvida summary::after { content: "+" }` cria o botão "+", que vira "−" quando a pergunta está aberta (`.duvida[open]`).

### 8–9. Apoio e rodapé
Fundo verde-escuro, cartão branco com o número 188 em fonte grande e rodapé em 3 colunas.

### 10. Animações (`@keyframes`)
| Nome | Efeito |
|---|---|
| `entrar` | Aparece subindo suavemente |
| `respirar` | Cresce e diminui devagar |
| `flutuar` | Sobe e desce 9px |
| `balancar` | Planta balança ±2° |
| `cair` | Folhas caem e somem |
| `pulsar` | Bolinha pulsa |
| `trocar` | Alterna "inspire / expire" |

`animation-timeline: view()` faz as seções (`.revelar`) aparecerem conforme você rola, só em navegadores que suportam.

### 11. Telas maiores (`@media (min-width: ...)`)
O site é **mobile-first**: o CSS normal vale para celular e os `@media` vão melhorando para telas maiores — 2 colunas a partir de 640px, 3 a partir de 760px, 4 a partir de 1000px, e o menu vira uma linha horizontal a partir de 1280px.

### 12. Alto contraste
`html.alto-contraste { --texto: #000; ... }` redefine as variáveis de cor para cores mais fortes. Basta o JS adicionar a classe `alto-contraste` no `<html>`.

### 13. Menos movimento
`@media (prefers-reduced-motion: reduce)` desliga as animações para quem configurou isso no aparelho (conforto e acessibilidade).

### Abertura animada
`.abertura-inicial` cobre a tela inteira (`position: fixed; inset: 0; z-index: 1000`). Cada `.abertura-cena` começa invisível (`opacity: 0`) e a classe `.ativa` a revela. `.saindo` faz a abertura desaparecer com desfoque.

### 14. Fotos reais da galeria *(novo)*
| Código | O que faz |
|---|---|
| `.foto img { width: 100%; aspect-ratio: 10/7; object-fit: cover }` | Todas as fotos ficam do mesmo tamanho, cortadas sem deformar |
| `.foto:hover img { transform: scale(1.04) }` | Zoom leve ao passar o mouse |
| `.foto-falhou img { visibility: hidden }` | Se a foto não carregar, esconde o ícone quebrado e mostra o fundo verde |
| `.faixa-foto` | Faixa de foto larga com legenda sobre um degradê escuro |

---

## 3. js/script.js — passo a passo

O arquivo tem 3 partes, cada uma dentro de uma função que roda sozinha `(function () { ... })();`

### Parte A — Abertura animada
| Trecho | O que faz |
|---|---|
| `document.getElementById("abertura-inicial")` | Pega a tela de abertura pelo `id` |
| `querySelectorAll(".abertura-cena")` | Pega as 3 mensagens |
| `window.matchMedia("(prefers-reduced-motion...")` | Descobre se a pessoa pediu menos movimento |
| `agendar(ms, funcao)` | Atalho para `setTimeout`, guardando o timer numa lista |
| `limparTimers()` | Cancela todos os timers |
| `mostrarCena(i)` | Liga a classe `ativa` só na cena `i` |
| `sair(rapido)` | Adiciona a classe `saindo`, e depois de 0,4s ou 0,9s chama `finalizar` |
| `finalizar()` | Esconde a abertura (`hidden = true`), libera a rolagem e leva o foco ao logo |
| `agendar(1500, ...)`, `3100`, `4800` | Troca de cena em 1,5s e 3,1s; sai em 4,8s |
| `agendar(6500, ...)` | Segurança: a página nunca fica presa |
| `pular.addEventListener("click", ...)` | Botão "Pular abertura" |
| `keydown` com `Escape` ou `Enter` | Também pula pelo teclado |
| `wheel` / `touchstart` | Rolar ou tocar na tela também pula |

### Parte B — Menu
| Trecho | O que faz |
|---|---|
| `caixaMenu = ...("menu-check")` | Pega a caixinha que abre o menu |
| `forEach(... addEventListener("click", ...))` | Ao clicar num link, fecha o menu (`checked = false`) |
| `keydown` com `Escape` | Esc também fecha o menu |
| `new IntersectionObserver(...)` | "Vigia" quais seções estão visíveis na tela |
| `entrada.isIntersecting` | Verdadeiro quando a seção entra na área de leitura |
| `setAttribute("aria-current", "true")` | Marca o link da seção atual (o CSS pinta de verde) |
| `rootMargin: "-35% 0px -55% 0px"` | Considera "atual" a seção que está na faixa do meio da tela |

### Parte C — Acessibilidade
| Trecho | O que faz |
|---|---|
| `tamanhos = [87.5, 100, 112.5, 125, 150]` | Os 5 tamanhos de texto (em % do normal) |
| `nomes = ["Menor", "Normal", ...]` | Nome de cada tamanho, mostrado na tela |
| `posicao = 1` | Índice do tamanho atual (1 = normal) |
| `altoContraste = false` | Guarda se o alto contraste está ligado |
| `aplicar()` | Aplica `font-size` no `<html>`, liga/desliga a classe `alto-contraste`, atualiza `aria-pressed`, escreve a mensagem de estado e salva no navegador |
| `localStorage.setItem(...)` | Guarda a escolha, para lembrar quando a pessoa voltar |
| `try { ... } catch` | Se o navegador bloquear o armazenamento, o site continua funcionando |
| Botões `+`, `−`, `Normal`, `Contraste`, `Restaurar` | Cada `addEventListener("click", ...)` muda `posicao` ou `altoContraste` e chama `aplicar()` |
| `JSON.parse(localStorage.getItem(...))` | Ao abrir o site, lê a escolha guardada e reaplica |

### Parte D — Fotos *(novo)*
Para cada `<img>` da galeria, `addEventListener("error", ...)` detecta falha de carregamento e adiciona a classe `foto-falhou` à moldura, para o layout não quebrar.

---

## 4. O que foi melhorado
1. Código separado em HTML, CSS e JS.
2. Texto solto `moverere` que aparecia no `<head>` foi removido.
3. `var(--verde)` na linha da abertura não existia; corrigido para `var(--verde-medio)`.
4. Galeria agora usa **6 fotos reais** (Unsplash) com `alt`, carregamento preguiçoso e plano B.
5. Nova **faixa de foto** de natureza antes do bloco de apoio.
6. Textos da galeria e do rodapé atualizados (antes diziam que eram só ilustrações).

## 5. Observações para a apresentação
- As fotos são carregadas pela internet. Para funcionar offline, baixe-as, coloque em `img/` e troque os `src` por `img/nome.jpg`.
- Confira se cada foto aparece corretamente e se combina com a legenda. Se alguma não agradar, troque só o `src`.
- O tema do site é saúde mental (um recorte de saúde dentro do tema sustentabilidade). Se o professor exigir mais sustentabilidade, dá para criar uma seção "Meio ambiente e saúde".
