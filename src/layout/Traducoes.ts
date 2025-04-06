import Experience from "../sections/Experience";

// src/traducoes.ts
type Idioma = 'pt' | 'en';

export const Traducoes = {
    pt: {
        Abouttitle: "Sobre",
        EducationTitle: "Educação",
        ExperienceTitle: "Experiência",
        SkillsTitle: "Skills",
        ProjectsTitle: "Projetos e Contribuições",
        hero: [
            {
            greeting: `Olá! meu nome é`,
            title: 'Desenvolvedora Full-stack',
            description: ` Construo aplicações <span class="highlight">eficientes</span> e <span class="highlight">user-friendly</span>, sempre <span class="highlight">aprendendo</span> e <span class="highlight">melhorando</span>.
            `,
            }
        ],
        About: [
            {
                introduction: "Olá! Meu nome é <highlight>Milena</highlight> e sou <animated>desenvolvedora de software</animated>.",
                paragraph1: "Tenho experiência em desenvolvimento <highlight>full-stack</highlight>, especialmente com Laravel, React e Spring Boot, construindo aplicações que são eficientes e amigáveis ao usuário. Atualmente, trabalho na <emphasis>Secretaria Estadual de Saúde</emphasis>, onde desenvolvo e mantenho sistemas que melhoram a gestão da saúde.",
                paragraph2: "Também tenho experiência com <hover>APIs</hover>, <hover>IA</hover>, <hover>bancos de dados</hover> relacionais e não relacionais, web design e desenvolvimento mobile usando Flutter. Além do meu trabalho, gosto de explorar novas tecnologias, trabalhar em projetos pessoais e colaborar em projetos, como o Hema, um aplicativo móvel que desenvolvi para gerenciar tratamentos para hanseníase.",
            }
        ],
        Education:[
            {
                title: "Bacharelado Interdisciplinar em Ciência e Tecnologia",
                institution: "Universidade Federal do Maranhão (UFMA)",
                year: "03/2021 - 03/2025",
            },
            {
                title: "Engenharia da Computação",
                institution: "Universidade Federal do Maranhão (UFMA)",
                year: "03/2025 - 2026",
            },
        ],
        Experience: [],
        Projects: [
            {
                title: "Painel de Monitoramento em Saúde",
                description: "Sistema web que permite acompanhar dados de saúde pública em tempo real, com gráficos e filtros dinâmicos.",
                techs: ["Laravel", "React", "MySQL"],
                image: '/images/projects/gerenciador-viagens.png',
                githubLink: 'https://github.com/seuusuario/gerenciador-viagens',
                featured: true
              },
            {
                title: "Hema - Gerenciador de Tratamentos",
                description: "Aplicativo mobile para auxiliar no gerenciamento de tratamentos de hanseníase, com lembretes e estatísticas.",
                techs: ["Flutter", "Firebase"],
                image: '/images/projects/gerenciador-viagens.png',
                githubLink: 'https://github.com/seuusuario/gerenciador-viagens',
                featured: true
              },
            ],
    },

    en: {
        Abouttitle: "About",
        EducationTitle: "Education",
        ExperienceTitle: "Experience",
        SkillsTitle: "Skills",
        ProjectsTitle: "Projects",
        navBar: [
            { title: "About"},
            { title: "Skills"},
            { title: "Experience" },
            { title: "Projects"},
        ],
        hero: [
            {
            greeting: `Hi! my name is`,
            title: 'Full Stack Developer',
            description: `Building <span class="highlight">efficient</span> and <span class="highlight">user-friendly</span> applications, always <span class="highlight">learning</span> and <span class="highlight">improving</span>.`
            ,
            }
        ],
        About: [
            {
            introduction: `Hi! My name is <span class="highlight">Milena</span> and I'm a <span class="highlight">software developer</span>.`,
            paragraph1: `
            I have experience in <span class="highlight">full-stack development</span>, especially with <span class="highlight">Laravel</span>, <span class="highlight">React</span>, and <span class="highlight">Spring Boot</span>,
            building <span class="highlight">efficient</span> and <span class="highlight">user-friendly</span> applications.
            Currently, I work at the <span class="highlight">State Health Department</span>, where I develop and maintain systems that improve healthcare management.
            `,
            paragraph2: `I also have experience with <span class="highlight">APIs</span>, <span class="highlight">AI</span>, <span class="highlight">databases</span> relational and non-relational, web design, and mobile development using Flutter. Besides my job, I enjoy exploring new technologies, working on personal projects, and collaborate to projects, such as Hema, a mobile app I developed for managing treatments for leprosy.`,
            education: `Education`,
            }
        ],
        Education: [
            {
                title: "Bacharel em Sistemas de Informação",
                institution: "Universidade Federal do Maranhão (UFMA)",
                year: "2021 - Presente",
            },
            {
                title: "Técnico em Informática",
                institution: "Instituto Federal do Maranhão (IFMA)",
                year: "2018 - 2020",
            },
        ],
        Experience: [

        ],
        Projects:[
            {
                title: "Health Monitoring Dashboard",
                description: "Web system that allows real-time monitoring of public health data, with dynamic graphs and filters.",
                techs: ["Laravel", "React", "MySQL"],
                image: '/images/projects/gerenciador-viagens.png',
                githubLink: 'https://github.com/seuusuario/gerenciador-viagens',
                liveLink: 'https://sistema-hospitalar-demo.com',
                featured: true
              },
            {
                title: "Hans+ - Treatment Manager",
                description: "Mobile app to assist in managing leprosy treatments, with reminders and statistics.",
                techs: ["Flutter", "Firebase"],
                image: '/images/projects/gerenciador-viagens.png',
                githubLink: 'https://github.com/seuusuario/gerenciador-viagens',
                liveLink: 'https://sistema-hospitalar-demo.com',
                featured: true
              },
        ],

    }
}
  