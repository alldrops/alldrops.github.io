import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  telus,
  mec,
  freybe,
  rio,
  wwp,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

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
    name: 'Node JS',
    icon: nodejs,
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
];

const experiences = [
  {
    title: 'Web Developer',
    company_name: 'K2',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Oct 2010 - Apr 2011',
  },
  {
    title: '.NET Developer Intern',
    company_name: 'FTI Tecnologia',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jun 2011 - Nov 2011',
  },
  {
    title: '.NET Developer Intern',
    company_name: 'Cantoni',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Nov 2011 - Apr 2012',
  },
  {
    title: 'Front End Developer',
    company_name: 'ICOMP',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Apr 2012 - Jun 2013',
  },
  {
    title: 'Front End Developer',
    company_name: 'NBR',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jun 2013 - Dec 2013',
  },
  {
    title: 'Web UI Engineer',
    company_name: 'Wundr',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Apr 2014 - Sep 2014',
  },
  {
    title: 'Web Developer',
    company_name: 'Wallop',
    icon: microverse,
    iconBg: '#333333',
    date: 'Sep 2014 - Dec 2014',
  },
  {
    title: 'Front End Developer (Contract)',
    company_name: 'MEC',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Jun 2015 - Apr 2016',
  },
  {
    title: 'Lead Front End Developer',
    company_name: 'TELUS Digital',
    icon: dcc,
    iconBg: '#333333',
    date: 'Apr 2016 - Mar 2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'TELUS',
    description: '',
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
    image: telus,
    repo: '',
    demo: 'https://telus.com',
  },
  {
    id: 'project-2',
    name: 'MEC',
    description:
      '',
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
    image: mec,
    repo: '',
    demo: 'https://mec.ca',
  },
  {
    id: 'project-3',
    name: 'Freybe',
    description: '',
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
    image: freybe,
    repo: '',
    demo: 'https://freybe.com/',
  },
  {
    id: 'project-4',
    name: 'Rio Brazilian Steakhouse',
    description: ``,
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
    image: rio,
    repo: '',
    demo: 'https://riobraziliansteakhouse.ca/',
  },
  {
    id: 'project-5',
    name: 'Wild Water Plumbing',
    description: '',
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
    image: wwp,
    repo: '',
    demo: 'https://www.wildwaterplumbing.com.au/',
  },
];

export { services, technologies, experiences, projects };
