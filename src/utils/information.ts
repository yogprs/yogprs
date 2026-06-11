export const experiences = [
  {
    period: 'Sept 2024 - Mar 2025',
    role: 'Front-End Programmer Internship',
    company: {
      name: 'PT Qtera Mandiri',
      location: 'South Jakarta, Indonesia',
    },
    tasks: [
      'Vue',
      'Vite',
      'TypeScript',
      'TailwindCSS',
      'Cypress',
      'Git',
      'Figma',
    ],
    description:
      'Developed and maintained front-end web applications using Vue.js, Vite, and TypeScript. Collaborated closely with cross-functional development teams to deliver scalable and user-friendly solutions. Conducted end-to-end testing to validate application workflows, simulate real user scenarios, and ensure seamless integration between components.',
  },
];

export const techStacks = [
  { name: 'HTML', icon: 'devicon:html5' },
  { name: 'CSS', icon: 'devicon:css3' },

  { name: 'Vue', icon: 'devicon:vuejs' },
  { name: 'Nuxt', icon: 'devicon:nuxt' },
  { name: 'React', icon: 'devicon:react' },
  { name: 'Next.js', icon: 'devicon:nextjs' },
  { name: 'Expo', icon: 'devicon:expo' },
  { name: 'Flask', icon: 'devicon:flask' },

  { name: 'TypeScript', icon: 'devicon:typescript' },
  { name: 'JavaScript', icon: 'devicon:javascript' },
  { name: 'Python', icon: 'devicon:python' },

  { name: 'TailwindCSS', icon: 'devicon:tailwindcss' },
  { name: 'GSAP', icon: 'simple-icons:gsap' },

  { name: 'Express.js', icon: 'devicon:express' },
  { name: 'Elysia', icon: 'skill-icons:elysia-light' },
  { name: 'Node.js', icon: 'devicon:nodejs' },
  { name: 'NestJS', icon: 'devicon:nestjs' },
  { name: 'Bun', icon: 'devicon:bun' },
  { name: 'Npm', icon: 'devicon:npm' },
  { name: 'Pnpm', icon: 'devicon:pnpm' },

  { name: 'PostgreSQL', icon: 'devicon:postgresql' },
  { name: 'MongoDB', icon: 'devicon:mongodb' },
  { name: 'MySQL', icon: 'devicon:mysql' },
  { name: 'Supabase', icon: 'devicon:supabase' },
  { name: 'Redis', icon: 'devicon:redis' },
  { name: 'Prisma', icon: 'devicon:prisma' },

  { name: 'Socket.IO', icon: 'devicon:socketio' },
  { name: 'Cypress', icon: 'devicon:cypressio' },
  { name: 'Zustand', icon: 'devicon:zustand' },
  { name: 'Pinia', icon: 'logos:pinia' },

  { name: 'Docker', icon: 'devicon:docker' },
  { name: 'Figma', icon: 'devicon:figma' },
  { name: 'Postman', icon: 'devicon:postman' },
  { name: 'Insomnia', icon: 'devicon:insomnia' },
  { name: 'Git', icon: 'devicon:git' },
  { name: 'Linux', icon: 'devicon:linux' },
];

export const projects = [
  {
    name: 'Atelier',
    description:
      'Real-time mobile chat application built with React Native and Expo. It features real-time messaging via WebSockets, OAuth authentication (Google/GitHub), and push notifications using Firebase Cloud Messaging (FCM).',
    year: 2026,
    stack: ['React Native', 'Expo', 'TypeScript', 'WebSocket'],
    image: '',
    link: {
      github: [
        {
          text: 'Github',
          url: 'https://github.com/AhmadKusumahDEV/chat-app',
        },
      ],
      preview: '',
    },
    category: ['Mobile Development'],
  },
  {
    name: 'Waste Identification',
    description: 'Waste Identification web application using AI Detection.',
    year: 2026,
    stack: [
      'Python',
      'Flask',
      'HTML',
      'CSS',
      'JavaScript',
      'Tensorflow',
      'Supabase',
    ],
    image: 'waste',
    link: {
      github: [
        {
          text: 'Github',
          url: 'https://github.com/yogprs/waste',
        },
      ],
      preview: '',
    },
    category: ['Web Development', 'AI & Machine Learning'],
  },
  {
    name: 'Kotonoha',
    description:
      'Kotonoha is a modern web-based anime tracker and draft manager that leverages the AniList API to let users seamlessly search, organize, and plan their personal anime watchlists.',
    year: 2026,
    stack: ['Nuxt', 'TailwindCSS', 'Prisma', 'MongoDB', 'GSAP', 'Redis'],
    image: '',
    link: {
      github: [
        {
          text: 'Github',
          url: 'https://github.com/yogprs/kotonoha',
        },
      ],
      preview: '',
    },
    category: ['Web Development'],
  },
  {
    name: 'CuacaWi',
    description:
      'Website to get information about weather conditions in in various cities around the world. using the OpenWeather API.',
    year: 2025,
    stack: ['Vue', 'Vite', 'TypeScript', 'TailwindCSS'],
    image: 'cuacawi',
    link: {
      github: [
        {
          text: 'Github',
          url: 'https://github.com/yogprs/CuacaWi',
        },
      ],
      preview: 'https://cuaca-wi.vercel.app',
    },
    category: ['Web Development'],
  },
  {
    name: 'Endang Stock',
    description:
      'Website for managing inventory at Agen Sembako Mbak Endang, with real-time stock notification features.',
    year: 2025,
    stack: [
      'Vue',
      'Vite',
      'Express.js',
      'TypeScript',
      'TailwindCSS',
      'Prisma',
      'PostgreSQL',
      'Socket.IO',
    ],
    image: 'endangstock',
    link: {
      github: [
        {
          text: 'FE Github',
          url: 'https://github.com/yogprs/endang_stock_fe',
        },
        {
          text: 'BE Github',
          url: 'https://github.com/yogprs/endang_stock_be',
        },
      ],
      preview: '',
    },
    category: ['Web Development'],
  },
  {
    name: 'Valnime',
    description: 'Web-based anime using JikanAPI to search anime details.',
    year: 2024,
    stack: ['React.js', 'TypeScript', 'TailwindCSS'],
    image: 'valnime',
    link: {
      github: [
        {
          text: 'Github',
          url: 'https://github.com/yogprs/valnime',
        },
      ],
      preview: 'https://valnime.vercel.app',
    },
    category: ['Web Development'],
  },
  {
    name: 'Elecbill',
    description:
      'This postpaid electricity payment web application was created to complete the analyst program certification.',
    year: 2024,
    stack: ['Next.js', 'JavaScript', 'TailwindCSS', 'PostgreSQL'],
    image: 'elecbill',
    link: {
      github: [
        {
          text: 'Github',
          url: 'https://github.com/yogprs/elecbill',
        },
      ],
      preview: '',
    },
    category: ['Web Development'],
  },
];

export const certifications = [
  {
    name: 'Certificate of Competence Program Analyst',
    company: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    date: 'Sept 2024',
    description:
      'Certificate from the Indonesian Professional Certification Authority, Competent in Software Development, with qualifications/competencies as a Program Analyst. Professional certification validating competency in web development, software design, and implementation.',
    image: 'program_analyst',
    verify_url: '',
  },
  {
    name: 'Basic CSS Learning Class Certificate',
    company: 'Codepolitan',
    date: 'May 2024',
    description:
      'Certificate from Codepolitan obtained after completing the basic CSS learning class.',
    image: 'codepolitan_css',
    verify_url: 'https://www.codepolitan.com/c/MRXOTFU',
  },
  {
    name: 'Basic HTML Learning Class Certificate',
    company: 'Codepolitan',
    date: 'Mar 2024',
    description:
      'Certificate from Codepolitan obtained after completing the basic HTML learning class.',
    image: 'codepolitan_html',
    verify_url: 'https://www.codepolitan.com/c/OT9ZG5V',
  },
  {
    name: `IT Bootcamp "Software Development"`,
    company: 'Bina Sarana Informatika University',
    date: 'Jun 2023',
    description:
      'A certificate obtained after attending a bootcamp to develop software.',
    image: 'itbootcamp',
    verify_url: '',
  },
];

export const contact = {
  email: 'yogaprasetya1124@gmail.com',
  location: 'Jakarta, Indonesia',
  availability: 'Open For Opportunities',
  socials: [
    {
      name: 'Github',
      url: 'https://github.com/yogprs',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yogaprasetyapl',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/yogprs',
    },
  ],
};
