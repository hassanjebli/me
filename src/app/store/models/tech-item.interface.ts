import {
  faPhp,
  faLaravel,
  faJs,
  faGit,
  faGithub,
  faGitlab,
  faDocker,
  IconDefinition,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

// type TechIcon = IconDefinition;

export interface TechItem {
  icon: IconDefinition | string;
  name: string;
  isSimpleIcon?: boolean;
}

export interface TechByCategory {
  category: string;
  techs: TechItem[];
}

// export const angular: TechItem = {
//   icon: faAngular,
//   name: "Angular"
// }

export const php: TechItem = {
  icon: faPhp,
  name: 'Php',
};

export const laravel: TechItem = {
  icon: faLaravel,
  name: 'Laravel',
};

export const js: TechItem = {
  icon: faJs,
  name: 'JavaScript',
};

export const ts: TechItem = {
  icon: 'https://cdn.simpleicons.org/typescript/22c55e',
  name: 'TypeScript',
  isSimpleIcon: true,
};

export const git: TechItem = {
  icon: faGit,
  name: 'Git',
};

export const github: TechItem = {
  icon: faGithub,
  name: 'Github',
};

export const gitlab: TechItem = {
  icon: faGitlab,
  name: 'Gitlab',
};

export const docker: TechItem = {
  icon: faDocker,
  name: 'Docker',
};

export const react: TechItem = {
  icon: faReact,
  name: 'React',
};

export const mysql: TechItem = {
  icon: 'https://cdn.simpleicons.org/mysql/22c55e',
  name: 'MySql',
  isSimpleIcon: true,
};

export const mongodb: TechItem = {
  icon: 'https://cdn.simpleicons.org/mongodb/22c55e',
  name: 'MongoDb',
  isSimpleIcon: true,
};

export const tailwindcss: TechItem = {
  icon: 'https://cdn.simpleicons.org/tailwindcss/22c55e',
  name: 'Tailwind css',
  isSimpleIcon: true,
};

export const bootstrap: TechItem = {
  icon: 'https://cdn.simpleicons.org/bootstrap/22c55e',
  name: 'Bootstrap',
  isSimpleIcon: true,
};

export const jquery: TechItem = {
  icon: 'https://cdn.simpleicons.org/jquery/22c55e',
  name: 'JQuery',
  isSimpleIcon: true,
};

export const inertia: TechItem = {
  icon: 'https://cdn.simpleicons.org/inertia/22c55e',
  name: 'Inertia',
  isSimpleIcon: true,
};

export const restApi: TechItem = {
  icon: 'assets/imgs/icons/rest-api.svg',
  name: 'Rest APIs',
  isSimpleIcon: true,
};

export const microservices: TechItem = {
  icon: 'assets/imgs/icons/microservices.svg',
  name: 'Microservices',
  isSimpleIcon: true,
};

export const allTechs: TechItem[] = [
  php,
  laravel,
  react,
  jquery,
  js,
  ts,
  tailwindcss,
  bootstrap,
  mysql,
  mongodb,
  restApi,
  microservices,
  git,
  docker,
  inertia,
];

export const techsByCategories: TechByCategory[] = [
  {
    category: 'Backend',
    techs: [php, laravel, restApi, microservices],
  },
  {
    category: 'Frontend',
    techs: [js, ts, tailwindcss],
  },
  {
    category: 'DBMS',
    techs: [mysql],
  },
  {
    category: 'Other tools',
    techs: [git, docker, gitlab, github],
  },
];

export const allTechsMap = {
  mongodb: mongodb,
  php: php,
  laravel: laravel,
  js: js,
  ts: ts,
  git: git,
  github: github,
  gitlab: gitlab,
  docker: docker,
  mysql: mysql,
  tailwindcss: tailwindcss,
  restApi: restApi,
  microservices: microservices,
};
