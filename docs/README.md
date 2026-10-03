# Mente Viva — Saúde Mental, Qualidade de Vida e Bem-Estar

## Nome do projeto
Mente Viva

## Tema
Saúde Mental, Qualidade de Vida, Prevenção e Promoção da Saúde

## Objetivo
Criar um site educativo e informativo sobre saúde mental, qualidade de vida, prevenção e promoção da saúde, relacionando o tema à sustentabilidade e ao impacto social, sem diagnosticar condições de saúde e sem substituir o acompanhamento de profissionais qualificados.

Este projeto foi desenvolvido como atividade acadêmica da disciplina de Front-End da UNICID.

## Integrantes
- Integrante 1 — Desenvolvimento Front-End
- Integrante 2 — Conteúdo e pesquisa
- Integrante 3 — Design e acessibilidade
- Integrante 4 — Documentação e testes

*(Nomes reais devem ser preenchidos pela equipe antes da entrega.)*

## Tecnologias utilizadas
- HTML5 semântico
- CSS3 (variáveis, Flexbox, Grid, media queries)
- JavaScript (vanilla, sem frameworks ou bibliotecas externas)
- SVG para ilustrações originais
- FFmpeg (uso local, apenas em desenvolvimento) para gerar o vídeo e o áudio de exemplo da página de Mídia

## Estrutura do projeto

```
/projeto/
│
├── index.html            Página inicial
├── sobre.html             Sobre o projeto (história, missão, visão, valores)
├── prevencao.html         Prevenção e promoção da saúde mental
├── qualidade-vida.html    Aspectos da qualidade de vida
├── impacto.html           Impacto social e indicadores
├── acessibilidade.html    Recursos e controles de acessibilidade
├── galeria.html           Galeria de ilustrações originais
├── midia.html             Vídeo, áudio e conteúdo institucional (iframe)
├── noticias.html          Notícias e conteúdos educativos
├── contato.html           Formulário de contato e dados da equipe
│
├── css/
│   └── style.css          Folha de estilos única do site
│
├── js/
│   └── script.js          Menu mobile, acessibilidade, validação e animações
│
├── img/                   Ilustrações SVG e imagens (poster do vídeo, ícone)
├── assets/                Vídeo (.mp4) e áudio (.mp3) usados na página de Mídia
└── docs/                  Documentação do projeto (este diretório)
    ├── README.md
    ├── diario-de-bordo.md
    ├── orcamento-hospedagem.md
    └── testes.md
```

## Como executar
1. Baixe/extraia a pasta `projeto` (ou o arquivo `.zip` correspondente) em seu computador.
2. Abra o arquivo `index.html` diretamente em qualquer navegador atualizado (Chrome, Firefox, Edge ou Safari).
3. Não é necessário instalar dependências, servidor ou build tools — o site é 100% estático.
4. Para testar localmente com um servidor (opcional, recomendado para o iframe da página de Mídia funcionar de forma mais previsível), é possível rodar, dentro da pasta `projeto`:
   ```
   python3 -m http.server 8000
   ```
   E acessar `http://localhost:8000` no navegador.

## Divisão das funções (sugestão de organização da equipe)
- **Estrutura e HTML semântico:** organização das 10 páginas, navegação e formulário.
- **Estilo e responsividade:** folha de estilos, identidade visual, media queries.
- **Acessibilidade:** revisão de contraste, foco, ARIA, testes com teclado e leitor de tela.
- **Conteúdo e pesquisa:** textos, verificação de fontes de dados, revisão de linguagem.
- **Documentação e testes:** preenchimento do diário de bordo, orçamento e relatório de testes.

## Observações importantes
- O site **não** diagnostica condições de saúde mental e **não substitui** o acompanhamento de profissionais de saúde.
- Dados e estatísticas usados no site são reais e estão referenciados na página de Impacto Social.
- Os dados de contato e os nomes da equipe apresentados no site são fictícios, para fins exclusivamente acadêmicos.
- O vídeo e o áudio da página de Mídia foram produzidos especificamente para este projeto (não são de terceiros).
