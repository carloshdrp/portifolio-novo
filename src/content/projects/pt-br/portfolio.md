---
title: "Portfólio Pessoal"
description: "Desenvolvimento de um site pessoal utilizando Astro, TypeScript e TailwindCSS, com foco em performance, SEO e internacionalização."
cover: "../images/portfolio-cover.jpeg"
tags:
  [
    "Astro",
    "TypeScript",
    "TailwindCSS",
    "i18n",
    "ESLint",
    "GitHub Actions",
  ]
github: "https://github.com/carloshdrp/portifolio-novo"
demo: "https://carloshdrp.com.br"
featured: true
pubDate: 2024-01-23
---

## Objetivos do Projeto
- Criar uma plataforma que apresente meus trabalhos de forma profissional;
- Demonstrar domínio de tecnologias modernas do mercado;
- Implementar boas práticas de desenvolvimento e arquitetura;
- Garantir desempenho e acessibilidade;
- Possibilitar internacionalização completa do conteúdo;

## Tecnologias Utilizadas
### Framework e Ferramentas
- Astro como framework principal 
- TypeScript para tipagem estática 
- TailwindCSS para estilização 
- ESLint e Prettier para qualidade de código 
- Git para controle de versão 
- GitHub Actions para CI/CD 

### Desempenho e SEO 
No projeto, foram implementadas diversas otimizações, como: 
- Geração estática com Astro;
- Lazy loading de imagens;
- Minificação do código-fonte para produção;
- Sitemap, robots.txt e web manifest automáticos;

### Internacionalização
O site possui suporte completo, tanto na interface quanto nas postagens, para os idiomas português e inglês, com detecção automática do idioma baseado nas preferências de navegador do visitante e conforme a rota utilizada.

### Interface e Experiência
- Design responsivo 
- Tema claro/escuro 
- Animações suaves 

## Estrutura de diretórios:
```
└── /./                
    ├── public/
    │   └── fonts/            
    ├── .github/            
    │   └── workflows/         # Workflows de CI/CD
    └── src/
        ├── types/             # Definições de tipos TypeScript
        ├── content/           # Projetos do portfólio em Markdown
        │   └── projects/  
        │       ├── images/
        │       ├── pt-br/
        │       └── en/
        ├── utils/              # Funções utilitárias
        ├── styles/             # Estilos CSS globais
        ├── components/         # Componentes Astro reutilizáveis
        ├── layouts/            # Layouts base das páginas
        ├── i18n/               # Arquivos de tradução e métodos auxiliares
        ├── assets/             # Recursos estáticos 
        │   └── images/         # Imagens do site
        └── pages/              # Rotas da aplicação
            └── [lang]/ 
                └── projects/ 
                    └── [...slug].astro 
```

## Telas
Tela inicial
![](../images/portfolio-cover.jpeg)

Tela de projeto
![](../images/portfolio-project.jpeg)




O código-fonte completo está disponível no GitHub como referência para outros desenvolvedores.