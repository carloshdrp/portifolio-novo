---
title: "Genius: Gamified Educational Platform"
description: "Full-stack development of an educational platform implementing gamification, permission system, and real-time communication."
cover: "../images/genius-cover.png"
tags: ["React", "Node.js", "Express", "AntD", "MySQL", "Socket.io", "TailwindCSS", "Prisma"]
github: "https://github.com/carloshdrp/TCC-2024"
featured: true
pubDate: 2024-01-23
---

## Planning and Architecture
The development of Genius followed a maintainability-focused approach. The project was divided into two main parts: client (frontend) and server (backend).

```
├── frontend/
│   ├── src/
│   │   ├── api/           / Redux Toolkit API methods
│   │   ├── assets/        / Static resources
│   │   ├── components/    / Reusable React components
│   │   ├── config/        / Settings (Socket.io, variables)
│   │   ├── pages/         / Application pages
│   │   ├── redux/         / Redux Toolkit states and reducers
│   │   ├── styles/        / CSS styling
│   │   └── utils/         / Utility functions
│
├── backend/
│   ├── config/            / Server settings
│   ├── controllers/       / Request handlers
│   ├── files/             / Avatar storage
│   ├── middlewares/       / Auth and validation middlewares
│   ├── prisma/            / Database schema and migrations
│   ├── routes/            / Route definitions
│   ├── services/          / Business logic and Prisma operations
│   ├── utils/             / Utility functions
│   └── validations/       / Joi validation schemas
```

## Core Features

- League system based on community contributions and ratings;
- Q&A forum for knowledge exchange;
- Quizzes with immediate feedback;
- Achievement and point system;
- Real-time notifications;
- Progressive permission system based on contributions.

## Technology Stack

### Frontend
- <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React</a> with JavaScript;
- <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">TailwindCSS</a> for styling;
- <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Ant Design</a> for UI components;
- <a href="https://redux-toolkit.js.org" target="_blank" rel="noopener noreferrer">Redux Toolkit</a> for state management;
- <a href="https://socket.io" target="_blank" rel="noopener noreferrer">Socket.io</a> for real-time communication.

### Backend
- <a href="https://nodejs.org/pt" target="_blank" rel="noopener noreferrer">Node.JS</a> with <a href="http://expressjs.com/pt-br/" target="_blank" rel="noopener noreferrer">Express</a>;
- <a href="https://www.prisma.io" target="_blank" rel="noopener noreferrer">Prisma</a> as **ORM**;
- <a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a> as **DBMS**;
- JWT authentication using <a href="https://www.passportjs.org" target="_blank" rel="noopener noreferrer">Passport.js</a>.

### Development Tools
- <a href="https://documenter.getpostman.com/view/26689861/2sAYJ4igB1" target="_blank" rel="noopener noreferrer">API Documentation with Postman</a>
- UI prototyping in Figma;
- ESLint for code standardization;
- Prettier for formatting;
- Version control with GIT.

## Outcome
Implementing a gamified approach to education aligned with Brazilian educational guidelines (BNCC), this project was presented and approved in November 2024 as a graduation requirement for the Technical Degree in Internet Computing at the Federal Institute of Rio Grande do Sul, Gravataí Campus.

## Screenshots
Homepage
![](../images/genius-cover.png)

User profile
![](../images/genius-profile.png)

Report table (administrators only)
![](../images/genius-report-table.png)
