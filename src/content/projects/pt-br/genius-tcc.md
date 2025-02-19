---
title: "Genius: Plataforma Educacional Gamificada"
description: "Desenvolvimento full-stack de uma plataforma educacional que implementa gamificação, sistema de permissões e comunicação em tempo real."
cover: "../images/genius-cover.png"
tags:
  [
    "React",
    "Node.js",
    "Express",
    "AntD",
    "MySQL",
    "Socket.io",
    "TailwindCSS",
    "Prisma",
  ]
github: "https://github.com/carloshdrp/TCC-2024"
featured: true
pubDate: 2024-01-23
---

## Visão Geral do Projeto  
O Genius foi projetado para atender às demandas do ensino moderno, introduzindo elementos de gamificação que incentivam o engajamento dos usuários. A abordagem envolve uma arquitetura bem definida, separando as responsabilidades do cliente (frontend) e do servidor (backend), o que permite o desenvolvimento separado, mas altamente integrado, de ambas as partes.  
- **Frontend**: React, Redux Toolkit e TailwindCSS são algumas das ferramentas escolhidas para garantir uma interface dinâmica e intuitiva.  
- **Backend**: Node.js, Prisma e MySQL possibilitam uma base robusta e eficiente para operações de lógica, autenticação e manipulação de dados.

```
├── frontend/
│   ├── src/
│   │   ├── api/           / Métodos de requisição via Redux Toolkit
│   │   ├── assets/        / Recursos estáticos
│   │   ├── components/    / Componentes React reutilizáveis
│   │   ├── config/        / Configurações (Socket.io, variáveis)
│   │   ├── pages/         / Páginas da aplicação
│   │   ├── redux/         / Estados e reducers do Redux Toolkit
│   │   ├── styles/        / Estilização CSS
│   │   └── utils/         / Funções utilitárias
│
├── backend/
│   ├── config/            / Configurações do servidor
│   ├── controllers/       / Controladores de requisições
│   ├── files/             / Armazenamento de avatares
│   ├── middlewares/       / Middlewares de autenticação/validação
│   ├── prisma/            / Schema e migrações do banco
│   ├── routes/            / Definição de rotas
│   ├── services/          / Lógica de negócio e operações do Prisma
│   ├── utils/             / Funções utilitárias
│   └── validations/       / Schemas de validação com Joi
```

## Funcionalidades Diferenciais  
* **Gamificação:** Ações como conquistas, pontuações e ligas engajam os usuários e incentivam a participação ativa na comunidade.  
* **Comunicação em Tempo Real:** Notificações instantâneas e fórum para troca de conhecimento tornam a experiência mais dinâmica.  
* **Segurança e Controle:** O sistema progressivo de permissões garante maior credibilidade para os conteúdos e cria um ambiente seguro para os estudantes.  
* **Questionários Personalizados:** Avaliações com feedback imediato para enriquecer o aprendizado, criadas de aluno para aluno.

## Tecnologias

### Frontend
* **React:** Construção de interfaces modulares e reutilizáveis.  
* **Ant Design e TailwindCSS:** Componentes e estilos modernos com excelente usabilidade.  
* **Redux Toolkit:** Gerenciamento de estados simplificado.  
* **Socket.io:** Comunicação em tempo real para maior interação.

### Backend
* **Node.js com Express:** Um servidor leve e escalável.  
* **Prisma como ORM:** Garante operações consistentes no banco de dados.  
* **MySQL:** Banco de dados sólido para qualidade e desempenho.  
* **JWT e Passport.js:** Para autenticação segura dos usuários.

### Outros Recursos  
* Utilização do Figma para criar protótipos detalhados.  
* Padronização de código com ESLint e Prettier.  
* Controle de versão utilizando Git.

## Impacto e Resultados  
O Genius foi desenvolvido seguindo as diretrizes do BNCC e apresentado como parte do Trabalho de Conclusão de Curso (TCC) para a obtenção do diploma técnico. Criei uma solução alinhada às tendências da educação digital, com foco em facilitar a troca de conhecimento e proporcionar uma experiência imersiva para professores e alunos.  

Aprovado em novembro de 2024 no IFSul, o projeto é uma demonstração do poder da integração entre tecnologia e educação, com resultados que destacam o potencial de transformar o ensino.

## Telas

#### Tela inicial
![](../images/genius-cover.png)

#### Tela de perfil
![](../images/genius-profile.png)

#### Tela de denúncias (restrita aos administradores)
![](../images/genius-report-table.png)


O Genius não é apenas um projeto técnico; é uma visão sobre como o aprendizado do século 21 pode ser cativante, acessível e altamente eficiente. Explore o repositório do projeto no GitHub para saber mais sobre a implementação ou entre em contato para discutirmos com mais detalhes!

A educação nunca foi tão interativa! 🌟 