import {
  frontend, backend, ux, prototyping,
  javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, git, figma, docker, postgresql, rubyrails, graphql,
  komikult, leaderboard, math, movie, nyeusi, space,
  midwest, dcc, mercy, marimed, healthcare,
  s_amazon, s_android, s_angular, s_boostrap, s_c, s_cPlus, s_css3, s_cassandra, s_django, s_docker, s_firebase, s_html5, s_java, s_javascript, s_jquery, s_kotlin,
  s_laravel, s_mongodb, s_mysql, s_nodejs, s_postgresql, s_python, s_reactjs, s_redis, s_redux, s_ruby, s_rubyrails, s_rust, s_spring, s_typescript, s_vuejs,
  r_platoon,
  r_dwntwn,
  r_yetimotion,
  r_dffrntera,
  r_racksimply,
} from '../assets'

const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
    text: 'Reat, Next, JavaScript, TypeScript, Bootstrap, TailWind CSS',
  },
  {
    title: 'Backend Developer',
    icon: backend,
    text: 'MongoDB, Node, Express, PHP, Laravel, Django',
  },
  {
    title: 'UI/UX Design',
    icon: ux,
    text: 'Material UI, Chakra UI, COREUI, Ant Design',
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
    text: 'Figma, Adobe XD',
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const svgTech = [
  // s_amazon,
  // s_android,
  s_angular,
  s_boostrap,
  // s_c,
  // s_cPlus,
  s_css3,
  s_cassandra,
  s_django,
  s_docker,
  // s_firebase,
  s_html5,
  // s_java,
  s_javascript,
  s_jquery,
  // s_kotlin,
  s_laravel,
  s_mongodb,
  s_mysql,
  s_nodejs,
  // s_postgresql,
  // s_python,
  s_reactjs,
  // s_redis,
  // s_redux,
  // s_ruby,
  // s_rubyrails,
  // s_rust, 
  // s_spring,
  s_typescript,
  s_vuejs,
]

const experiences = [
  {
    title: 'Senior Front-end Developer(Tech Lead) ',
    company_name: 'Midwest Sterilization Corporation',
    icon: midwest,
    iconBg: '#111111',
    content: [
      'Developing dynamic web pages using HTML/HTML5, CSS/CSS3, Bootstrap, jQuery, Angular13, React.JS, NodeJS',
      'Implemented client-side Interface using React.js and worked using React.js components, Forms, Events, Keys, Router, Animations and Redux concept.',
      'Involved in React.js for Data patterns which improves readability and made it easier to maintain larger apps and used React.js for declarative, e§cient, and flexible JavaScript library for building user interfaces.',
      'Created Typescript reusable components and services to consume REST API’s using Component-based architecture.',
      'Worked with version control systems (GIT), Bitbucket, GitLab, Docker to keep track of development state.',
    ],
    date: 'Jul 2022 - Feb 2024',
    location: 'Murphysboro, Illinois, USA',
  },
  {
    title: 'Senior Front-end Developer(Architect)',
    company_name: 'MariMed Inc ',
    icon: marimed,
    iconBg: '#111111',
    content: [
      'Proficiently analyzed and translated business requirements to technical requirements, resulting in accurate and effective implementation of software solutions.',
      'Demonstrated expertise in the design, development, integration testing, and implementation of enterprise distributed systems, ensuring seamless system integration and high reliability.',
      'Good understanding of overall web design including basic usability, accessibility, industry standards, architecture, routing and navigation.',
      'Developed HTML, DHTML, CSS, REST API, and JavaScript skills, enabling efficient and responsive web application development.',
      'Developed front-end components using HTML5, CSS3, Bootstrap 5, and Angular, enhancing the visual appeal and user experience of the application.',
    ],
    date: 'Jul 2021 - Jun 2022',
    location: 'Marion, IL, USA',
  },
  {
    title: 'Senior Front-end Developer(Remote)',
    company_name: 'Mercy',
    icon: mercy,
    iconBg: '#111111',
    content: [
      'Designed and developed complex UI screens using React , Material UI and HTML/CSS, resulting in improved user interface responsiveness and a 20 % reduction in page load time.',
      'Developed UI pages using CSS3, JavaScript, and Bootstrap, resulting in visually appealing and responsive web applications.',
      'Utilized ReactJS and AngularJS for front-end development, creating responsive and interactive user interfaces that increased user satisfaction by 25 % ',
      'Responsible for designing dynamic and multi-browser compatible pages using HTML 5.0, CSS3,JavaScript jQuery, React JS, React Native JSON, AJAX',
      'Designed CSS templates for use in all pages on the website working with CSS Background, positioning, text, border, margin, padding, and table.',
    ],
    date: 'Mar 2019 - Jun 2021',
    location: 'Missouri 63141, USA',
  },
  {
    title: 'Front-end Web and Software Engineer (Remote)',
    company_name: 'Southern Illinois Healthcare',
    icon: healthcare,
    iconBg: '#111111',
    content: [
      'Developed UI using HTML5, CSS3, Ext JS, Bootstrap, jQuery, and JSP for interactive cross browser functionality and complex user interface.',
      'Used JavaScript DOM manipulation and JavaScript event to generate the data result in UI',
      'Developed cross-browser/platform HTML5, CSS, and JavaScript to match design specs for complex page layouts while adhering to code standards. ',
      'Developed front-end components using HTML5, CSS3, Bootstrap 5, and Angular, enhancing the user interface design and improving user engagement by 25 %.',
      'Developed single-page web applications using Angular for the client-side, resulting in faster page load times and improved overall performance.',
    ],
    date: 'Jun 2017 - Dec 2018',
    location: 'Carbondale, IL 62902, USA',
  },

]

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    // repo: 'https://github.com/shaqdeff/KomiKult',
    // demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    // repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    // repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    // repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    // repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
]

const r_projexts = [
  {
    id: 'project-1',
    name: 'Flyplatoon',
    description: 'Created by a core team of aviation- industry experts, PLATOON is the most sophisticated way to fly private.Our unrivalled connections, collective experience and class- leading hospitality elevate jet charter to a whole new level – where premium is paramount and style comes as standard.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: r_platoon,
    // repo: 'https://www.flyplatoon.com',
    demo: 'https://www.flyplatoon.com',
  },
  {
    id: 'project-2',
    name: 'DWNTWN',
    description: 'We Are A Full-Service Digital Agency And Business Consulting Firm That Helps Companies Grow And Thri',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: r_dwntwn,
    // repo: 'https://dwntwnmedia.consulting/',
    demo: 'https://dwntwnmedia.consulting/',
  },
  {
    id: 'project-3',
    name: 'Yetimotion',
    description: 'Yeti Pictures is a team of designers/directors with focus in motion graphics, 3D animation and art direction based in Athens, Greece.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: r_yetimotion,
    // repo: 'https://yetimotion.com/',
    demo: 'https://yetimotion.com/',
  },
  {
    id: 'project-4',
    name: 'Dffrntera',
    description: 'Envision ideas, branding, distribution & retail trade for a new era.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: r_dffrntera,
    // repo: 'https://www.dffrntera.com',
    demo: 'https://www.dffrntera.com',
  },
  {
    id: 'project-5',
    name: 'RackSimply',
    description: `RackSimply is a North American solution provider specializing in industry-leading IT hardware, software, services, and cloud consulting. RackSimply is taking on a traditionally slow sales process and creating a customer-centric experience for your organization's technical team.`,
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: r_racksimply,
    // repo: 'https://racksimply.com/',
    demo: 'https://racksimply.com/',
  },
]

export { navLinks, services, technologies, svgTech, experiences, projects, r_projexts }
