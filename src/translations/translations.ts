
export const translations = {
  pt: {
    hero: {
      greeting: 'Olá! meu nome é',
      title: 'Desenvolvedora Full-stack',
      dynamicText: "CConstruindo aplicações eficientes e user-friendly, sempre aprendendo e melhorando.",
      cv: 'Baixar CV'
    },
    about: {
      title: 'Sobre',
      texto1: `Olá! Me chamo Milena Neves, <span class="highlight">desenvolvedora de software</span> com formação em <span class="highlight">Ciência e Tecnologia</span> e atualmente estudante de <span class="highlight">Engenharia da Computação</span>.
      Tenho experiência no desenvolvimento de aplicações <span class="highlight">web</span> e <span class="highlight">mobile</span>, 
      com foco em <span class="highlight">back-end</span>, utilizando tecnologias como <span class="highlight">Laravel</span>, <span class="highlight">Spring Boot</span>, <span class="highlight">React</span> e <span class="highlight">Flutter</span>.`,
      texto2: `Atuo em todas as etapas do <span class="highlight">ciclo de desenvolvimento de software</span> desde a <span class="highlight">modelagem de dados</span> até a implementação de <span class="highlight">funcionalidades</span> e  <span class="highlight">interfaces</span>. Embora meu foco principal seja o <span class="highlight">back-end</span>, 
      gosto de criar e aprimorar o <span class="highlight">design</span> das aplicações sempre que necessário, 
      buscando entregar soluções <span class="highlight">completas</span>, <span class="highlight">funcionais</span> e com <span class="highlight"> boa experiência para o usuário</span>.`,
      texto3: `Atualmente, estou buscando me aprofundar em <span class="highlight">arquitetura de software</span> e <span class="highlight">inteligência artificial</span>. Gosto de <span class="highlight">trabalhar em equipe,</span> <span class="highlight">aprender novas tecnologias</span> e enfrentar <span class="highlight">desafios</span> que me façam 
      crescer como profissional e como pessoa.`,
      educacao: 'Educação',
      graduacao1: 'Bacharelado Interdisciplinar em Ciência e Tecnologia',
      graduacao2: 'Engenharia da Computação',
    },
    skills: {
      title: 'Habilidades',
      linguagens: 'Linguagens',
      Banco: 'Banco de dados',
      ferramentas: 'Ferramentas'
    },
    experience: {
      title: 'Experiência',
      experiences: [
        {
          id: 'Dynamos',
          company: 'Dynamos',
          shortName: 'Dynamos',
          role: 'Desenvolvedora Full Stack',
          period: 'Abr 2025 - No momento',
          location: 'São Luís, MA',
          responsibilities: [
            'Exerceu papel de liderança técnica sobre equipe júnior, coordenando estagiários no desenvolvimento de sistemas, sendo responsável por organizar demandas, modelar soluções técnicas, elaborar fluxos de processos e conduzir reuniões de alinhamento',
            'Desenvolveu e deu manutenção em funcionalidades back-end utilizando PHP',
            'Desenvolveu API’S para comunicação entre sistemas internos e externos',
            'Criou interfaces dinâmicas integradas via AJAX, com respostas JSON e manipulação assíncrona dos dados',
            ' Realizou o levantamento e modelagem de dados, criando tabelas, relacionamentos e views otimizadas em MySQL',
          ]
        },
        {
          id: 'ses',
          company: 'Secretaria de Estado da Saúde do Maranhão',
          shortName: 'SES/MA',
          role: 'Desenvolvedora Full Stack',
          period: 'Set 2023 - Abr 2025',
          location: 'São Luís, MA',
          responsibilities: [
            'Desenvolveu e manteve sistemas relacionados à saúde, utilizando o framework Laravel para implementar a arquitetura MVC',
            'Implementou funcionalidades completas no back-end, incluindo criação de rotas, controllers, models, middlewares e lógica de negócios (CRUD)',
            'Configurou regras de acesso e permissões por meio de sistemas de papéis e autenticação.',
            'Colaborou com a equipe em reuniões semanais de sprint, contribuindo com sugestões de melhoria e revisão de tarefas.',
            'Participou da modelagem e implementação de bancos de dados relacionais',
            'Desenvolveu interfaces responsivas e intuitivas com Blade, HTML, CSS e JavaScript, contribuindo para uma melhor experiência do usuário.'
          ]
        },
        {
          id: 'cdl',
          company: 'CDL',
          shortName: 'CDL',
          role: 'Estagiária TI',
          period: 'Jan 2022 - Ago 2023',
          location: 'São Luís, MA',
          responsibilities: [
            'Fornecer assistência aos usuários na utilização dos sistemas da empresa.',
            'Realizar manutenção e conserto de equipamentos de informática.',
            'Configurar softwares básicos.',
            'Participação do desenvolvimento do site da empresa'
          ]
        }
      ]
    },
    projects: {
      title: 'Projetos e colaborações',
      all: 'Todos',
      personal: 'Pessoal',
      contribution: 'Colaborações',
      projects: [
            {
              id: 'hans-plus',
              title: 'Hans+',
              description: 'Aplicativo mobile desenvolvido para o TCC, voltado para apoiar o tratamento de hanseníase. Conta com funcionalidades educativas e de acompanhamento do tratamento.',
              image: '/projects_images/hans.jpeg',
              technologies: ['Flutter', 'Dart', 'Android'],
              liveLink: 'https://hansmais.netlify.app/',
              contribution: true
            },
            {
              id: 'monitora-saude',
              title: 'Monitora Saúde',
              description: 'Painel de monitoramento de dados em saúde, utilizado por 217 municípios. Desenvolvido com foco em visualização de dados e usabilidade.',
              image: '/projects_images/monitora.jpeg',
              technologies: ['Laravel', 'PHP', 'JavaScript', 'PostgreSQL', 'Figma', 'Blade', 'HTML', 'CSS', 'Trello'],
              liveLink: 'https://monitora.saude.ma.gov.br/',
              contribution: true
            },
            {
              id: 'geohosp',
              title: 'GeoHosp - Sistema de Gestão Hospitalar',
              description: 'Sistema completo para gestão de hospitais, incluindo módulos de refeições, exames e consultas. Projeto colaborativo focado em otimização de processos internos.',
              image: '/projects_images/geohosp.png',
              technologies: ['Laravel', 'Blade', 'MySQL', 'PHP', 'JavaScript', 'Bootstrap', 'MVC', 'Git', 'Trello'],
              contribution: true
            },
            {
              id: 'renaveh',
              title: 'Renaveh',
              description: 'Sistema centralizado para gestão de pacientes e notificações de saúde. Projeto colaborativo com foco em organização e rastreamento de informações clínicas.',
              image: '/projects_images/renaveh.png',
              technologies: ['Laravel', 'Blade', 'MySQL', 'PHP', 'JavaScript', 'Bootstrap', 'MVC', 'Git', 'Trello'],
              contribution: true
            },
            {
              id: 'gerenciador-viagens',
              title: 'Gerenciador de Viagens',
              description: 'API REST desenvolvida em Java com Spring Boot para gerenciar viagens e destinos, com foco em escalabilidade e boas práticas de desenvolvimento backend.',
              image: '/projects_images/api.jpg',
              technologies: ['Java', 'Spring Boot'],
              githubLink: 'https://github.com/milenafbn/Journey-Planner',
              contribution: false
            },
            {
              id: 'ml-bankmarketing',
              title: 'Projeto de Machine Learning - Bank Marketing',
              description: 'Solução de machine learning utilizando o dataset Bank Marketing para prever respostas de clientes em campanhas bancárias. Inclui pré-processamento, validação cruzada e avaliação de modelos.',
              image: '/projects_images/ml-bankmarketing.png',
              technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib'],
              githubLink: 'https://github.com/milenafbn/Bank-Marketing-Analysis',
              contribution: true
            },
            {
              id: 'cadserv',
              title: 'Cadserv',
              description: 'Sistema de gerenciamento de funcionários para controle de dados pessoais, férias, escolaridade e lotação. Projeto colaborativo.',
              image: '/projects_images/cadserv.jpeg',
              technologies: ['Laravel', 'Blade', 'MySQL', 'PHP', 'JavaScript', 'Bootstrap', 'MVC', 'Git', 'Trello'],
              contribution: true
            },
            {
              id: 'primeira-infancia-sem-fome',
              title: 'Primeira Infância Sem Fome',
              description: 'Sistema de gerenciamento de dados de funcionários em projetos sociais, incluindo cadastro, férias e escolaridade. Projeto colaborativo.',
              image: '/projects_images/no-image.png',
              technologies: ['Laravel', 'Blade', 'MySQL', 'PHP', 'JavaScript', 'Bootstrap', 'MVC', 'Git', 'Trello'],
              contribution: true
            },
            {
              id: 'intelligent-snake-solver',
              title: 'Intelligent Snake Solver',
              description: 'Agente inteligente que utiliza o algoritmo A* para resolver automaticamente uma versão do jogo Snake. Projeto acadêmico de IA baseado em objetivos.',
              image: '/projects_images/snake.png',
              technologies: ['Python', 'Pygame', 'Algoritmo A*'],
              githubLink: 'https://github.com/milenafbn/AStarSnakeAgent',
              contribution: false
            },
            {
              id: 'mario-game',
              title: 'Mario Game',
              description: 'Jogo arcade inspirado no clássico Mario, desenvolvido utilizando JavaScript e HTML5 Canvas. Possui animações, obstáculos e sistema de pontuação.',
              image: '/projects_images/mario.jpeg',
              technologies: ['JavaScript', 'HTML', 'CSS', 'Canvas'],
              githubLink: 'https://github.com/milenafbn/MarioGame-Server',
              contribution: false
            },
            {
              id: 'tic-tac-toe',
              title: 'Jogo da Velha',
              description: 'Versão interativa do clássico Jogo da Velha desenvolvida em React, com interface dinâmica e lógica de jogo em tempo real.',
              image: '/projects_images/tictactoe.jpeg',
              technologies: ['React'],
              githubLink: 'https://github.com/milenafbn/tic-tac-toe',
              liveLink: 'https://milenafbn.github.io/tic-tac-toe/',
              contribution: false
            },
            {
              id: 'Job-Scraping-Tool',
              title: 'Job Scraping Tool',
              description: 'Aplicação em Python para extração de descrições de vagas no site Gupy a partir de um link de busca fornecido pelo usuário. Utiliza Selenium e BeautifulSoup para coletar informações relevantes, extrair palavras-chave dos requisitos e gerar uma nuvem de palavras com as habilidades mais demandadas.',
              image: '/projects_images/job.png',
              technologies: ['Python','Selenium','BeautifulSoup'],
              githubLink: 'https://github.com/milenafbn/Job-Scraping-Tool',
              contribution: false
            },
            {
              id: 'mapa-hospitais',
              title: 'Mapa de Hospitais - MA',
              description: 'Mapa interativo desenvolvido em React que exibe a localização dos hospitais no Maranhão, permitindo a visualização da infraestrutura de saúde do estado.',
              image: '/projects_images/mapa.png',
              technologies: ['HTML', 'JavaScript', 'PHP'],
              githubLink: 'https://github.com/milenafbn/Mapa-Hospitais',
              contribution: false
            },
            {
              id: 'pivotMesh-adaptation',
              title: 'Adaptação do PivotMesh',
              description: 'Exploração da adaptação do modelo PivotMesh para um conjunto de dados personalizado contendo malhas 3D externas. Um objeto LEGO simplificado foi utilizado para avaliar a capacidade de generalização do modelo além da sua distribuição original de treinamento.',
              image: '/projects_images/pivot.jpeg',
              technologies: ['Pyhton'],
              githubLink: 'https://github.com/milenafbn/PivotMesh_adaptation',
              contribution: false
            },


      ]
    }
  },

  
  en: {
    hero: {
      greeting: 'Hi! my name is',
      title: 'Full-stack Developer',
      dynamicText: "BBuilding efficient and user-friendly applications, always learning and improving.",
      cv: 'Download CV'
    },
    about: {
      title: 'About',
      texto1: `Hello! My name is Milena Neves, a <span class="highlight">software developer</span> with a degree in <span class="highlight">Science and Technology</span> and currently a <span class="highlight">Computer Engineering</span> student.
      I have experience in developing <span class="highlight">web</span> and <span class="highlight">mobile</span> applications,
      focusing on <span class="highlight">back-end</span>, using technologies such as <span class="highlight">Laravel</span>, <span class="highlight">Spring Boot</span>, <span class="highlight">React</span>, and <span class="highlight">Flutter</span>.`,
      texto2: `I work on all stages of the <span class="highlight">software development cycle</span> from <span class="highlight">data modeling</span> to implementing <span class="highlight">features</span> and <span class="highlight">interfaces</span>. Although my main focus is <span class="highlight">back-end</span>,
      I enjoy creating and improving the <span class="highlight">design</span> of applications whenever necessary,
      aiming to deliver <span class="highlight">complete</span>, <span class="highlight">functional</span> solutions with a <span class="highlight">good user experience</span>.`,
      texto3: `Currently, I am looking to deepen my knowledge in <span class="highlight">software architecture</span> and <span class="highlight">artificial intelligence</span>. I enjoy <span class="highlight">working in teams,</span> <span class="highlight">learning new technologies</span>, and facing <span class="highlight">challenges</span> that help me
      grow both professionally and personally.`,
      educacao: 'Education',
      graduacao1: 'Interdisciplinary Bachelors Degree in Science and Technology',
      graduacao2: 'Computer Engineering',
    },
  
    experience: {
      title: 'Experience',
      experiences: [
        {
          id: 'Dynamos',
          company: 'Dynamos',
          shortName: 'Dynamos',
          role: 'Full Stack Developer',
          period: 'Apr 2025 - Present',
          location: 'São Luís, MA',
          responsibilities: [
            'Played a technical leadership role over a junior team, coordinating interns in systems development, being responsible for organizing tasks, modeling technical solutions, designing process flows, and leading alignment meetings',
            'Developed and maintained back-end functionalities using PHP',
            'Developed APIs for communication between internal and external systems',
            'Created dynamic interfaces integrated via AJAX, with JSON responses and asynchronous data handling',
            'Conducted data gathering and modeling, creating tables, relationships, and optimized views in MySQL',
          ]
        },
        {
          id: 'ses',
          company: 'Maranhão State Department of Health',
          shortName: 'SES/MA',
          role: 'Full Stack Developer',
          period: 'Sep 2023 - Apr 2025',
          location: 'São Luís, MA',
          responsibilities: [
            'Developed and maintained health-related systems using the Laravel framework to implement MVC architecture',
            'Implemented full back-end features, including route creation, controllers, models, middlewares, and business logic (CRUD)',
            'Configured access rules and permissions through role-based and authentication systems',
            'Collaborated with the team in weekly sprint meetings, contributing improvement suggestions and reviewing tasks',
            'Participated in the modeling and implementation of relational databases',
            'Developed responsive and intuitive interfaces with Blade, HTML, CSS, and JavaScript, contributing to a better user experience'
          ]
        },
        {
          id: 'cdl',
          company: 'CDL',
          shortName: 'CDL',
          role: 'IT Intern',
          period: 'Jan 2022 - Aug 2023',
          location: 'São Luís, MA',
          responsibilities: [
            'Provided user support in using the company\'s systems',
            'Performed maintenance and repair of IT equipment',
            'Configured basic software',
            'Participated in the development of the company\'s website'
          ]
        }
      ]
    },

    skills: {
      title: 'Skills',
      linguagens: 'Programming Languages',
      Banco: 'Databases',
      ferramentas: 'Tools'
    },
    projects: {
      title: 'Projects and collaborations',
      all: 'All',
      personal: 'Personal',
      contribution: 'Contributions',
      projects: [
        {
          id: 'hans-plus',
          title: 'Hans+',
          description: 'Mobile application developed for the final graduation project, aimed at supporting leprosy treatment. Includes educational and treatment monitoring features.',
          image: '/projects_images/hans.jpeg',
          technologies: ['Flutter', 'Dart', 'Android'],
          liveLink: 'https://hansmais.netlify.app/',
          contribution: true
        },
        {
          id: 'monitora-saude',
          title: 'Monitora Saúde',
          description: 'Health data monitoring dashboard used by 217 municipalities. Developed with a focus on data visualization and usability.',
          image: '/projects_images/monitora.jpeg',
          technologies: ['Laravel', 'PHP', 'JavaScript', 'PostgreSQL', 'Figma', 'Blade', 'HTML', 'CSS', 'Trello'],
          livelink: 'https://monitora.saude.ma.gov.br/',
          contribution: true
        },
        {
          id: 'geohosp',
          title: 'GeoHosp - Hospital Management System',
          description: 'Complete system for hospital management, including meal, exam, and consultation modules. Collaborative project focused on optimizing internal processes.',
          image: '/projects_images/geohosp.png',
          technologies: ['Laravel', 'Blade', 'MySQL', 'PHP', 'JavaScript', 'Bootstrap', 'MVC', 'Git', 'Trello'],
          contribution: true
        },
        {
          id: 'renaveh',
          title: 'Renaveh',
          description: 'Centralized system for patient and health notification management. Collaborative project focused on organization and tracking of clinical information.',
          image: '/projects_images/renaveh.png',
          technologies: ['Laravel', 'Blade', 'MySQL', 'PHP', 'JavaScript', 'Bootstrap', 'MVC', 'Git', 'Trello'],
          contribution: true
        },
        {
          id: 'gerenciador-viagens',
          title: 'Travel Manager',
          description: 'REST API developed in Java with Spring Boot to manage trips and destinations, focusing on scalability and backend development best practices.',
          image: '/projects_images/api.jpg',
          technologies: ['Java', 'Spring Boot'],
          githubLink: 'https://github.com/milenafbn/Journey-Planner',
          contribution: false
        },
        {
          id: 'ml-bankmarketing',
          title: 'Machine Learning Project - Bank Marketing',
          description: 'Machine learning solution using the Bank Marketing dataset to predict customer responses to banking campaigns. Includes preprocessing, cross-validation, and model evaluation.',
          image: '/projects_images/ml-bankmarketing.png',
          technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib'],
          githubLink: 'https://github.com/milenafbn/Bank-Marketing-Analysis',
          contribution: true
        },
        {
          id: 'cadserv',
          title: 'Cadserv',
          description: 'Employee management system for controlling personal data, vacation, education, and department allocation. Collaborative project.',
          image: '/projects_images/cadserv.jpeg',
          technologies: ['Laravel', 'Blade', 'MySQL', 'PHP', 'JavaScript', 'Bootstrap', 'MVC', 'Git', 'Trello'],
          contribution: true
        },
        {
          id: 'primeira-infancia-sem-fome',
          title: 'Primeira infância sem fome',
          description: 'Employee data management system for social projects, including registration, vacation, and education. Collaborative project.',
          image: '/projects_images/no-image.png',
          technologies: ['Laravel', 'Blade', 'MySQL', 'PHP', 'JavaScript', 'Bootstrap', 'MVC', 'Git', 'Trello'],
          contribution: true
        },
        {
          id: 'intelligent-snake-solver',
          title: 'Intelligent Snake Solver',
          description: 'Intelligent agent that uses the A* algorithm to automatically solve a version of the Snake game. Academic AI project based on goal-oriented behavior.',
          image: '/projects_images/snake.png',
          technologies: ['Python', 'Pygame', 'A* Algorithm'],
          githubLink: 'https://github.com/milenafbn/AStarSnakeAgent',
          contribution: false
        },
        {
          id: 'mario-game',
          title: 'Mario Game',
          description: 'Arcade game inspired by the classic Mario, developed using JavaScript and HTML5 Canvas. Features animations, obstacles, and a scoring system.',
          image: '/projects_images/mario.jpeg',
          technologies: ['JavaScript', 'HTML', 'CSS', 'Canvas'],
          githubLink: 'https://github.com/milenafbn/MarioGame-Server',
          contribution: false
        },
        {
          id: 'tic-tac-toe',
          title: 'Tic-Tac-Toe Game',
          description: 'A classic Tic-Tac-Toe game developed in React, featuring an interactive interface and real-time game logic.',
          image: '/projects_images/tictactoe.jpeg',
          technologies: ['React'],
          githubLink: 'https://github.com/milenafbn/tic-tac-toe',
          liveLink: 'https://milenafbn.github.io/tic-tac-toe/',
          contribution: false
        },
        {
          id: 'Job-Scraping-Tool',
          title: 'Job Scraping Tool',
          description: 'Python application that scrapes job descriptions from the Gupy platform based on a user-provided search link. Utilizes Selenium and BeautifulSoup to retrieve relevant job information, extract keywords from requirements, and generate a visual word cloud of the most in-demand skills.',
          image: '/projects_images/job.png',
          technologies: ['Python','Selenium','BeautifulSoup'],
          githubLink: 'https://github.com/milenafbn/Job-Scraping-Tool',
          contribution: false
        },
        {
          id: 'mapa-hospitais',
          title: 'Hospitals Map - MA',
          description: 'Interactive React map displaying the location of hospitals in Maranhão, allowing users to visualize healthcare infrastructure across the state.',
          image: '/projects_images/mapa.png',
          technologies: ['HTML','PHP','JavaScript'],
          githubLink: 'https://github.com/milenafbn/Mapa-Hospitais',
          contribution: false
        },
        {
          id: 'pivotMesh-adaptation',
          title: 'PivotMesh Adaptation',
          description: 'Exploration of the PivotMesh model adaptation to a custom dataset of external 3D meshes. A simplified LEGO object was used to evaluate the model’s generalization capabilities beyond its original training distribution.',
          image: '/projects_images/pivot.jpeg',
          technologies: ['React'],
          githubLink: 'https://github.com/milenafbn/PivotMesh_adaptation',
          contribution: false
        },

      ]

    }
  }
};
