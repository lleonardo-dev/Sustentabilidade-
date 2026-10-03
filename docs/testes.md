# Registro de Testes — Mente Viva

Este documento reúne os testes realizados no site, cobrindo navegação, responsividade, formulário, acessibilidade e validação de HTML. A equipe deve atualizar os resultados (`OK` / `Pendente` / `Falhou`) conforme os testes forem executados em navegadores e dispositivos reais.

## 1. Testes de navegação

| Item testado | Resultado esperado | Status |
|---|---|---|
| Menu principal presente em todas as 10 páginas | Os mesmos 10 links aparecem em todas as páginas | OK (verificado automaticamente na geração do site) |
| Link da página atual destacado (`aria-current="page"`) | O item do menu correspondente à página aberta aparece destacado | OK |
| Logo "Mente Viva" leva à página inicial | Clicar no logo abre `index.html` | OK |
| Links do rodapé funcionam | Todos os links internos do rodapé abrem a página correta | Pendente (testar clicando em cada link no navegador) |
| Botões da página inicial ("Conhecer o projeto", "Ver formas de prevenção") | Levam a `sobre.html` e `prevencao.html` | OK |
| Menu mobile abre e fecha corretamente | Clique no botão de menu exibe/oculta a navegação abaixo de 900px de largura | Pendente (testar em dispositivo/emulador) |

## 2. Testes de responsividade

| Largura de tela | Dispositivo de referência | O que observar | Status |
|---|---|---|---|
| ~360–414px | Celulares comuns | Sem rolagem horizontal, texto legível, botões não cortados, menu mobile funcional | Pendente |
| ~768px | Tablets | Grades de cartões se reorganizam, imagens não deformam | Pendente |
| ~1024–1280px | Notebooks | Layout de duas colunas exibido corretamente (hero, seções "Sobre") | Pendente |
| ~1440px+ | Monitores grandes | Conteúdo respeita a largura máxima do container, sem esticar demais | Pendente |

**Como testar:** abrir cada uma das 10 páginas no navegador e usar as ferramentas de desenvolvedor (modo responsivo) para simular as larguras acima, verificando especialmente a página `contato.html` (formulário) e `galeria.html` (grade de imagens).

## 3. Testes do formulário de contato (`contato.html`)

| Cenário | Resultado esperado | Status |
|---|---|---|
| Enviar formulário vazio | Navegador impede o envio e destaca os campos obrigatórios (Nome, E-mail, Assunto, Mensagem) | Pendente |
| E-mail em formato inválido (ex.: `teste@`) | Navegador exibe mensagem de erro nativa do `type="email"` | Pendente |
| Telefone fora do padrão esperado | Campo aceita apenas números, espaços, parênteses e traços, conforme o `pattern` definido | Pendente |
| Número de pessoas do grupo menor que 1 ou maior que 500 | Campo numérico impede valores fora do intervalo definido (`min`/`max`) | Pendente |
| Preenchimento correto de todos os campos obrigatórios | Mensagem de confirmação é exibida abaixo do formulário e o foco é movido até ela | Pendente |
| Navegação pelo formulário usando apenas o teclado (Tab) | É possível preencher e enviar o formulário sem usar o mouse | Pendente |

## 4. Testes de acessibilidade

| Item testado | Resultado esperado | Status |
|---|---|---|
| Navegação completa por teclado (Tab/Shift+Tab) | Todos os links, botões e campos são alcançáveis, com foco visível | Pendente |
| Botão "Pular para o conteúdo principal" | Aparece ao pressionar Tab logo no início da página e leva ao `<main>` | Pendente |
| Controles de acessibilidade (A+, A−, Alto contraste, Restaurar padrão) | Alteram o tamanho da fonte e o contraste em tempo real, refletidos em toda a página | OK (testado via inspeção do código e comportamento do script) |
| Leitura com leitor de tela (ex.: NVDA, VoiceOver ou TalkBack) | Estrutura de títulos, imagens com texto alternativo e formulário com labels são lidos corretamente | Pendente |
| Contraste de cores (modo padrão) | Texto e fundo atendem a um contraste adequado para leitura confortável | Pendente (recomenda-se verificar com uma ferramenta de contraste) |
| Modo de alto contraste | Mantém a legibilidade de todos os textos e componentes | Pendente |
| Redução de movimento (`prefers-reduced-motion`) | Com a preferência ativada no sistema operacional, as animações de revelação são desativadas | OK (implementado via media query) |

## 5. Validação de HTML

| Página | Ferramenta sugerida | Status |
|---|---|---|
| index.html | Validador do W3C (validator.w3.org) | Pendente |
| sobre.html | Validador do W3C | Pendente |
| prevencao.html | Validador do W3C | Pendente |
| qualidade-vida.html | Validador do W3C | Pendente |
| impacto.html | Validador do W3C | Pendente |
| acessibilidade.html | Validador do W3C | Pendente |
| galeria.html | Validador do W3C | Pendente |
| midia.html | Validador do W3C | Pendente |
| noticias.html | Validador do W3C | Pendente |
| contato.html | Validador do W3C | Pendente |

**Verificações automáticas já realizadas durante o desenvolvimento:**
- Todas as páginas possuem exatamente uma tag `<html lang="pt-BR">` e um `<h1>`.
- Todas as imagens (`<img>`) possuem atributo `alt`.
- Todas as páginas possuem `id="conteudo-principal"` no `<main>`, referenciado pelo link "Pular para o conteúdo principal".
- Todas as páginas incluem `aria-current="page"` no item de menu correspondente.

## 6. Próximos passos sugeridos para a equipe
1. Rodar cada página pelo validador oficial do W3C e corrigir eventuais avisos.
2. Testar o formulário e a navegação em pelo menos dois navegadores diferentes (ex.: Chrome e Firefox).
3. Testar em pelo menos um dispositivo móvel real, além do modo responsivo do navegador.
4. Testar a leitura do site com um leitor de tela.
5. Registrar aqui os resultados finais antes da entrega da atividade.
