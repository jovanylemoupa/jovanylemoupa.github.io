// portfolio.config.ts

export const portfolioConfig = {
  // Informations personnelles
  personal: {
    firstName: 'Jovany',
    lastName: 'Lemoupa',
    title: 'Développeur Full-Stack',
    email: 'jovanylemoupa@gmail.com',
    phone: '+33 7 59 61 14 10',
    location: 'Grenoble, France',
    cvUrl:
      'https://drive.google.com/file/d/1npZBXy0uSlmocRsfO1HbTTSO-F9U9osc/view',
  },

  // Réseaux sociaux
  social: {
    linkedin: 'https://www.linkedin.com/in/jovanylemoupa/',
    github: 'https://github.com/jovanylemoupa',
    instagram: 'https://www.instagram.com/jovanylemoupa/',
  },

  // Métadonnées SEO
  seo: {
    title: 'Jovany Lemoupa - Développeur Full-Stack | Portfolio',
    description:
      'Développeur Full-Stack web et mobile avec plus de 3 ans d’expérience, j’analyse les besoins et conçois des applications modernes. Mes missions freelance m’ont permis d’explorer divers environnements techniques. Parallèlement, je préside le département musique de mon école, où je coordonne des projets collaboratifs, renforçant ainsi mes compétences en pilotage et organisation.',
    keywords: [
      'développeur web ',
      'développeur full stack',
      'développeur angular',
      'développeur react',
      'développeur node.js',
      'création site web',
      'développement application web',
      'freelance développeur',
      'jovany lemoupa',
      'portfolio développeur',
    ],
    author: 'Jovany Lemoupa',
    ogImage: 'img/og-image.png',
    ogUrl: 'https://jovanylemoupa.com',
  },

  // Configuration des animations
  animations: {
    typewriterTexts: [
      'Développeur Web',
      'Web Designer',
      'Développeur Full-Stack',
      "Créateur d'expériences digitales",
      "Passionné d'innovation",
    ],
    typeSpeed: 80,
    deleteSpeed: 30,
    pauseDuration: 2000,
  },

  // Navigation
  navigation: [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À Propos', href: '#a-propos' },
    { label: 'Services', href: '#services' },
    { label: 'Projets', href: '#projets' },
    { label: 'Contact', href: '#contact' },
  ],

  // Compétences
  skills: {
    frontend: {
      title: 'Front-End',
      items: [
        { name: 'Angular', logo: 'img/angular_logo.png', level: 95 },
        { name: 'React', logo: 'img/react_logo.png', level: 90 },
        {
          name: 'TypeScript',
          logo: 'img/typescript_logo.png',
          level: 95,
        },
        { name: 'Sass/SCSS', logo: 'img/scss_logo.png', level: 90 },
        { name: 'Tailwind', logo: 'img/tailwind_logo.jpeg', level: 85 },
      ],
    },
    backend: {
      title: 'Back-End',
      items: [
        { name: 'Python', logo: 'img/python_logo.jpeg', level: 90 },
        { name: 'Node.js', logo: 'img/node_logo.png', level: 90 },
        { name: 'Express.js', logo: 'img/express_logo.png', level: 90 },
        { name: 'NestJS', logo: 'img/nestjs_logo.png', level: 85 },
        { name: 'GraphQL', logo: 'img/graphql_logo.png', level: 80 },
      ],
    },
    database: {
      title: 'Base de données',
      items: [
        { name: 'MongoDB', logo: 'img/mongodb_logo.png', level: 85 },
        { name: 'PostgreSQL', logo: 'img/postgres_logo.png', level: 85 },
        { name: 'Redis', logo: 'img/redis_logo.jpeg', level: 75 },
      ],
    },
    tools: {
      title: 'DevOps & Outils',
      items: [
        { name: 'Docker', logo: 'img/docker_logo.jpeg', level: 80 },
        { name: 'Git', logo: 'img/git_logo.jpeg', level: 95 },
        { name: 'Figma', logo: 'img/figma_logo.jpeg', level: 85 },
      ],
    },
  },

  // Formation
  education: [
    {
      period: '2023 - Actuellement',
      title: 'Ingénieur Informatique - 3iL Ingénieurs',
      description:
        "Spécialisation en conception et développement de systèmes d'information",
      icon: 'faGraduationCap',
    },
    {
      period: '2022',
      title: 'Classes Préparatoires Intégrées',
      description: 'Informatique, Mathématiques et Physique',
      icon: 'faBook',
    },
  ],

  // Services
  services: [
    {
      icon: 'faPalette',
      title: 'Design UI/UX',
      description:
        "Création d'interfaces intuitives et esthétiques qui captivent vos utilisateurs et optimisent leur expérience.",
      features: [
        'Wireframes et prototypes',
        'Design système complet',
        'Tests utilisateurs',
        'Responsive design',
      ],
    },
    {
      icon: 'faCode',
      title: 'Développement Web',
      description:
        'Solutions web performantes et évolutives, développées avec les dernières technologies pour garantir rapidité et fiabilité.',
      features: [
        'Applications SPA/PWA',
        'API REST et GraphQL',
        'Intégration de paiement',
        'Temps réel avec WebSockets',
      ],
    },
    {
      icon: 'faRocket',
      title: 'Optimisation SEO',
      description:
        'Stratégies SEO avancées pour améliorer votre visibilité et attirer plus de clients qualifiés vers votre site.',
      features: [
        'Audit SEO complet',
        'Optimisation technique',
        'Stratégie de contenu',
        'Suivi de performance',
      ],
    },
    {
      icon: 'faChalkboardTeacher',
      title: 'Consulting & Formation',
      description:
        'Accompagnement personnalisé et formations pratiques en développement web moderne (Angular, React, Node.js).',
      features: [
        'Formation sur mesure',
        'Code review',
        'Architecture logicielle',
        'Bonnes pratiques',
      ],
    },
  ],

  // Témoignages
  testimonials: [
    {
      name: 'Thibaud Benoist',
      role: 'CTPO — Directeur développement & produit',
      content:
        'Jovany a transformé notre vision en une application web exceptionnelle. Son professionnalisme et son expertise technique sont remarquables. Un vrai talent !',
      rating: 5,
      avatar: 'TB',
    },
    {
      name: 'Hugo Kuo',
      role: 'Co-founder & COO @ noet-ia | DeepTech AI × Industry',
      content:
        'Un développeur talentueux qui comprend parfaitement les besoins business. Notre site e-commerce a vu ses ventes augmenter de 40% après la refonte.',
      rating: 5,
      avatar: 'HK',
    },
    {
      name: 'David Chhang',
      role: 'Développeur web & mobile freelance',
      content:
        'Jovany est un développeur passionné et rigoureux. Sa capacité à apprendre rapidement et à s\'adapter aux nouvelles technologies est impressionnante.',
      rating: 5,
      avatar: 'DC',
    },
    {
      name: 'Olivier Daniel-Thomas',
      role: 'CEO & Founder @ noet-ia',
      content:
        'Excellent travail d\'équipe, code propre et bien documenté. Jovany apporte toujours des solutions innovantes aux problèmes techniques complexes.',
      rating: 5,
      avatar: 'OD',
    },
  ],

  // Galerie
  gallery: [
    {
      title: 'Certification Web',
      category: 'Certifications',
      image: 'img/Certifications/certif.png',
      description: 'Certification en développement web',
    },
    {
      title: 'Certification Coaching School',
      category: 'Certifications',
      image: 'img/Certifications/certif_coahting_scholl.png',
      description: 'Certification obtenue à la Coaching School',
    },
    {
      title: 'Principes SOLID',
      category: 'Certifications',
      image: 'img/Certifications/Principes_solid.png',
      description: 'Maîtrise des principes SOLID en développement logiciel',
    },
    {
      title: 'LangChain',
      category: 'Certifications',
      image: 'img/Certifications/Certif-langchain.png',
      description: 'Certification LangChain — développement d\'applications IA avec LLMs',
    },
    {
      title: 'LangChain Intro',
      category: 'Certifications',
      image: 'img/Certifications/langchain-intro.png',
      description: 'Introduction à LangChain — bases du développement IA avec LLMs',
    },
    {
      title: 'LangSmith',
      category: 'Certifications',
      image: 'img/Certifications/langSmith.png',
      description: 'Certification LangSmith — observabilité et débogage d\'applications LLM',
    },
    {
      title: 'Recommandation LinkedIn',
      category: 'Recommandations',
      image: 'img/Certifications/linkedin_recommendation1.png',
      description: 'Recommandation professionnelle reçue de mon réseau, attestant de mes compétences et de mon sérieux.',
    },
    {
      title: 'Recommandation — Valentine (1)',
      category: 'Recommandations',
      image: 'img/Certifications/valentine_1.png',
      description: 'Recommandation de Valentine',
    },
    {
      title: 'Recommandation — Valentine (2)',
      category: 'Recommandations',
      image: 'img/Certifications/valentine_2.png',
      description: 'Valentine était ma tutrice de stage — voici sa fiche d\'évaluation.',
    },
  ],

  // Configuration des projets (exemple)
  projectsConfig: {
    categories: [
      'Tous',
      'E-commerce',
      'Application Web',
      'Site Vitrine',
      'Mobile',
    ],
    defaultCategory: 'Tous',
  },

  // Messages et textes
  messages: {
    contactSuccess:
      'Message envoyé avec succès! Je vous répondrai dans les plus brefs délais.',
    contactError:
      "Erreur lors de l'envoi du message. Veuillez réessayer ou me contacter directement par email.",
    projectLoading: 'Chargement du projet...',
    projectError:
      "Projet en phase d'initialisation. Veuillez réessayer plus tard.",
  },

  // Configuration des couleurs (pour le thème)
  theme: {
    colors: {
      primary: 'rgb(0, 1, 31)',
      secondary: '#FFCC00',
      accent: '#FF3100',
      background: '#f3f3f3',
      gradient1: '#ffebb8',
      gradient2: '#e3f2fd',
    },
    fonts: {
      primary:
        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      heading: 'Inter, sans-serif',
    },
  },
};

// Type exports pour TypeScript
export type PortfolioConfig = typeof portfolioConfig;
export type Skill = (typeof portfolioConfig.skills.frontend.items)[0];
export type Service = (typeof portfolioConfig.services)[0];
export type Education = (typeof portfolioConfig.education)[0];
export type Testimonial = (typeof portfolioConfig.testimonials)[0];
