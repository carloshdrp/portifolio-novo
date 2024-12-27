export const ui = {
  "pt-br": {
    welcome: {
      greeting: "Olá, eu sou o",
      description:
        "Prazer em receber você no meu portifólio. Atualmente sou um estudante de Análise e Desenvolvimento de Sistemas no IFSul câmpus gravataí.",
      terminal: { file: "sobreMim.js" },
      codeComment: "// Desenvolvedor Full Stack",
    },
    nav: {
      home: "Início",
      about: "Sobre Mim",
      projects: "Projetos",
      certifications: "Certificados",
      academic: "Formação Acadêmica",
      contact: "Entre em Contato",
      lang: {
        english: "Inglês",
        portuguese: "Português",
      },
    },
    about: {
      title: "Sobre Mim",
      journey: {
        title: "Minha Jornada",
        description:
          "Formado no curso técnico em Informática para Internet e estudante de Análise e Desenvolvimento de Sistemas. Com 19 anos, busco minha primeira experiência profissional para aplicar e expandir os conhecimentos adquiridos ao longo da minha formação.",
      },
      education: {
        title: "Formação",
        course1: {
          title: "Técnico em Informática para Internet",
          status: "Concluído em 2024",
        },
        course2: {
          title: "Análise e Desenvolvimento de Sistemas",
          status: "Conclusão prevista para 2027",
        },
        institution: "IFSul - Câmpus Gravataí",
      },
      skills: {
        tech_stack: {
          title: "Linguagens e Bibliotecas",
          items: [
            "Laravel/PHP",
            "JavaScript",
            "Express",
            "Prisma",
            "MySQL",
            "PostgreSQL",
            "Tailwind CSS",
            "React",
            "Astro",
          ],
        },
        tools: {
          title: "Ferramentas e S.O.",
          items: [
            "WebStorm",
            "VS Code",
            "Windows 11",
            "WSL2",
            "macOS",
            "Postman",
            "Figma",
          ],
        },
        learning: {
          title: "Interesses",
          items: ["Python", "TypeScript", "Docker"],
        },
      },
      goals: {
        title: "Objetivos",
        description:
          "Aplicar meus conhecimentos de programação em projetos reais, contribuindo com minha capacidade de análise e colaboração em equipe.",
      },
    },
    projects: {
      title: "Projetos",
      github: "Ver no GitHub",
      back: "Voltar",
      demo: "Demonstração",
      viewAll: "Ver todos os projetos",
    },
  },
  en: {
    welcome: {
      greeting: "Hello, I'm",
      description:
        "Welcome to my portfolio. I am currently a Systems Analysis and Development student at IFSul Gravataí campus.",
      terminal: { file: "aboutMe.js" },
      codeComment: "// Full Stack Developer",
    },
    nav: {
      home: "Home",
      about: "About Me",
      certifications: "Certificates",
      academic: "Education",
      contact: "Get in Touch",
      lang: {
        english: "English",
        portuguese: "Portuguese",
      },
      projects: "Projects",
    },
    about: {
      title: "About Me",
      journey: {
        title: "My Journey",
        description:
          "Graduated in Internet Computing Technical Course and Systems Analysis and Development student. At 19 years old, I am seeking my first professional experience to apply and expand the knowledge acquired throughout my education.",
      },
      education: {
        title: "Education",
        course1: {
          title: "Internet Computing Technician",
          status: "Completed in 2024",
        },
        course2: {
          title: "Systems Analysis and Development",
          status: "Expected completion in 2027",
        },
        "course2.status": "Expected completion in 2027",
        institution: "IFSul - Gravataí Campus",
      },
      skills: {
        tech_stack: {
          title: "Languages and Libraries",
          items: [
            "Laravel/PHP",
            "JavaScript",
            "Express",
            "Prisma",
            "SQL",
            "Tailwind CSS",
            "React",
            "Astro",
          ],
        },
        tools: {
          title: "Tools and O.S.",
          items: [
            "IntelliJ IDEA",
            "VS Code",
            "Windows 11",
            "WSL2",
            "macOS",
            "Postman",
            "Figma",
          ],
        },
        learning: {
          title: "Learning",
          items: ["Python", "TypeScript", "Docker"],
        },
      },
      goals: {
        title: "Goals",
        description:
          "Apply my programming knowledge in real projects, contributing with my analytical skills and team collaboration.",
      },
    },
    projects: {
      title: "Projects",
      github: "View on GitHub",
      back: "Go back",
      demo: "Demonstration",
      viewAll: "View all projects",
    },
  },
} as const;
