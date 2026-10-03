# Escopo do Projeto — Mente Viva

## 1. Identificação
- **Nome do projeto:** Mente Viva
- **Tema:** Saúde Mental, Qualidade de Vida, Prevenção e Promoção da Saúde
- **Disciplina:** Front-End
- **Instituição:** UNICID
- **Integrantes:** a preencher pela equipe (ver `README.md`)

## 2. Contexto e justificativa
A saúde mental é parte essencial da saúde geral, mas ainda carrega estigma e desinformação. Um site educativo, acessível e bem estruturado pode contribuir para ampliar o acesso à informação de qualidade sobre prevenção, qualidade de vida e promoção da saúde, ao mesmo tempo em que serve como aplicação prática dos conteúdos de Front-End estudados na disciplina.

## 3. Objetivo geral
Desenvolver um site educativo, responsivo e acessível sobre saúde mental, qualidade de vida, prevenção e promoção da saúde, sem diagnosticar condições de saúde e sem substituir o acompanhamento profissional.

## 4. Objetivos específicos
- Apresentar conteúdo educativo sobre saúde mental, prevenção e qualidade de vida.
- Relacionar o tema à sustentabilidade e ao impacto social.
- Aplicar boas práticas de HTML5 semântico, CSS3 responsivo e JavaScript.
- Implementar recursos de acessibilidade (controle de fonte, alto contraste, navegação por teclado).
- Produzir documentação completa do processo de desenvolvimento.

## 5. Público-alvo
Estudantes, profissionais e o público em geral interessados em compreender melhor saúde mental, qualidade de vida e prevenção — sem exigência de conhecimento técnico ou de saúde prévio.

## 6. Escopo funcional
- 10 páginas HTML interligadas por um menu de navegação consistente.
- Formulário de contato com validação HTML5 (campos obrigatórios, tipos específicos, padrões de preenchimento).
- Galeria de imagens ilustrativas com legendas e textos alternativos.
- Página de mídia com vídeo, áudio e iframe.
- Controles de acessibilidade funcionais via JavaScript (fonte e contraste).
- Menu responsivo para dispositivos móveis.

## 7. Escopo não funcional
- Site totalmente estático (sem backend, banco de dados ou autenticação).
- Compatibilidade com os principais navegadores atualizados (Chrome, Firefox, Edge, Safari).
- Responsividade do celular ao desktop, sem rolagem horizontal.
- Código organizado em HTML, CSS e JavaScript separados.
- Desempenho leve: imagens vetoriais (SVG) e sem bibliotecas externas desnecessárias.

## 8. Mapa do site
```
Início (index.html)
├── Sobre (sobre.html)
├── Prevenção (prevencao.html)
├── Qualidade de Vida (qualidade-vida.html)
├── Impacto Social (impacto.html)
├── Acessibilidade (acessibilidade.html)
├── Galeria (galeria.html)
├── Mídia (midia.html)
├── Notícias (noticias.html)
└── Contato (contato.html)
```
Todas as páginas se conectam entre si pelo menu principal e pelo rodapé.

## 9. Conteúdo e identidade visual
- **Nome/marca:** Mente Viva
- **Paleta:** branco, verde suave, azul claro, azul petróleo, tons neutros — transmitindo acolhimento, serenidade e confiança, evitando visual hospitalar.
- **Tipografia:** título em fonte serifada (Fraunces), texto em fonte humanista sem serifa (Work Sans).
- **Tom de voz:** claro, direto, acolhedor e responsável — sem alarmismo e sem promessas de tratamento.

## 10. Tecnologias e ferramentas
HTML5, CSS3 (variáveis, Grid, Flexbox, media queries), JavaScript (vanilla), SVG para ilustrações, Markdown para documentação.

## 11. Cronograma (sugestão de 5 semanas)
| Semana | Atividade |
|---|---|
| 1 | Definição de escopo, pesquisa de conteúdo e planejamento das páginas |
| 2 | Estrutura HTML e navegação das 10 páginas |
| 3 | Estilização (CSS), responsividade e identidade visual |
| 4 | Acessibilidade, JavaScript, formulário, mídia e galeria |
| 5 | Testes, documentação final e ajustes de revisão |

## 12. Divisão de tarefas
Ver seção "Divisão das funções" em `README.md`.

## 13. Riscos e restrições
- **Risco:** uso de linguagem que pareça diagnosticar ou substituir profissionais de saúde. **Mitigação:** avisos claros em várias páginas reforçando que o site é educativo.
- **Risco:** dados ou estatísticas sem fonte confiável. **Mitigação:** uso exclusivo de dados verificáveis, com fonte citada (OMS, CVV).
- **Risco:** falhas de acessibilidade. **Mitigação:** checklist de acessibilidade dedicado (`acessibilidade.html`) e testes específicos (`testes.md`).
- **Restrição:** projeto estático, sem backend — o formulário de contato não envia dados reais.

## 14. Critérios de aceitação
- Existem 10 páginas HTML, todas interligadas pelo mesmo menu.
- O formulário possui validação HTML5 funcional.
- Existem vídeo, áudio e iframe funcionais na página de Mídia.
- A galeria apresenta imagens com alt, legenda e fonte.
- O site é responsivo, sem rolagem horizontal, do celular ao desktop.
- O site possui recursos de acessibilidade funcionais (fonte e contraste).
- O HTML utiliza semântica adequada (header, nav, main, section, article, footer).
- Todas as imagens possuem texto alternativo.
- Existe relação clara com sustentabilidade e impacto social (página `impacto.html`).
- A documentação (README, diário de bordo, orçamento e testes) está completa.
- O código está organizado em arquivos separados de HTML, CSS e JavaScript.

## 15. Aprovação
| Nome | Função | Assinatura/Data |
|---|---|---|
| _(preencher)_ | Orientador(a) da disciplina | |
| _(preencher)_ | Representante da equipe | |
