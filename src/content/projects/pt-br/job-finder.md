---
title: "Job Finder: Plataforma para divulgação de vagas de emprego"
description: "Desenvolvimento de uma plataforma para a divulgação de vagas de emprego através do Express.js e Handlebars."
cover: "../images/jobfinder-cover.png"
tags:
  [
    "Express",
    "Node.js",
    "Handlebars",
    "Prisma",
    "Postgres",
    "Tailwind CSS",
  ]
github: "https://github.com/carloshdrp/EXPESS-jobfinder"
featured: false
pubDate: 2024-02-19
---

Dessa vez, vou compartilhar um projeto que realizei em abril de 2023, uma plataforma de publicação e busca de vagas de emprego, desenvolvida utilizando tecnologias como Express.js, Handlebars e Prisma ORM.

Ao longo deste artigo, explorarei os detalhes sobre o projeto, a arquitetura utilizada, as tecnologias escolhidas, além dos aprendizados-chave e possíveis melhorias. Vamos juntos?

## Sobre o Projeto
A plataforma foi projetada para criar um sistema funcional, tanto para recrutadores quanto para candidatos à procura de vagas. Aqui estão os principais destaques da aplicação:
- **Sistema de Publicação e Busca de Vagas de Emprego**  
Recrutadores podem incluir novas vagas utilizando um formulário simples, enquanto candidatos podem buscar posições relevantes utilizando o campo de busca.


- **Arquitetura MVC com Express.js e Handlebars**  
A aplicação utiliza o padrão arquitetural **Model-View-Controller (MVC)** para garantir um código organizado e facilitar a manutenção.


- **Interface Responsiva com Tailwind CSS**  
A interface foi criada para ser intuitiva e funcional, adaptando-se facilmente a dispositivos de diferentes tamanhos.


- **Persistência de Dados com Prisma ORM + PostgreSQL**  
O banco de dados armazena informações das vagas, e a integração com o Prisma simplifica as operações de leitura e escrita.

## Como Implementar
Se quiser explorar por conta própria, o repositório do projeto está disponível no GitHub! Aqui está um rápido guia de como configurar e rodar o projeto localmente:
1. Clone o repositório:
```bash
git clone https://github.com/carloshdrp/EXPESS-jobfinder.git
```

2. Instale as dependências:
```bash
npm i
```

3. Configure as variáveis de ambiente no arquivo `.env`:
```bash
DATABASE_URL="postgresql://user:password@localhost:5432/jobfinder"
```

4. Execute as migrações do Prisma para criar o esquema do banco:
```bash
npx prisma migrate dev
```

5. Rode o servidor:
```bash
npm run dev
```
Pronto! Agora você pode testar a aplicação localmente no navegador em http://localhost:8080.

## Tecnologias Utilizadas
Para entregar uma solução eficiente, optei por usar as seguintes ferramentas e tecnologias:

- **Express.js**  
Framework leve para construir o servidor backend e gerenciar o roteamento.


- **Handlebars**  
Template engine eficiente para criar views dinâmicas.


- **Prisma ORM**  
Uma interface poderosa para comunicação com o banco de dados PostgreSQL.


- **Tailwind CSS**  
Framework CSS utilitário que facilita a criação de interfaces responsivas e modernas.


- **Express Validator**  
Biblioteca essencial para validação de formulários e segurança dos dados.


- **Body Parser**  
Middleware para processar requisições HTTP de forma mais fácil.

## Aprendizados-Chave
No backend, o uso do Prisma ORM com PostgreSQL elevou a aplicação para outro nível, dominando consultas de banco de dados mais complexas. Já no frontend, o Tailwind CSS brilhou ao ajudar na criação de layouts.  

E não paramos por aí! O gerenciamento de variáveis de ambiente com arquivos `.env` garantiu segurança e escalabilidade ao projeto, enquanto o Express Validator mostrou o poder de uma validação de formulários bem feita — protegendo o sistema e melhorando a experiência dos usuários.  

Cada detalhe, cada ferramenta, fez a diferença. Um projeto cheio de desafios, mas que resultou em um avanço técnico e prático incrível!

## Galeria
#### Página Inicial
![](../images/jobfinder-home.png)

#### Página da Vaga
![](../images/jobfinder-vaga.png)


## Pronto Para Explorar?
Se você curtiu o projeto, não hesite em explorá-lo! Ficarei grato por qualquer feedback ou contribuição. Vamos continuar construindo e aprendendo juntos!