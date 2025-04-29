import {
  inertia,
  js,
  laravel,
  php,
  react,
  restApi,
  tailwindcss,
  TechItem,
  ts,
} from './tech-item.interface';

export interface Project {
  title: string;
  description: string[];
  techs: TechItem[];
  image: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'GearShift - Car selling platform',
    description: [
      'GearShift is a car selling platform that allows users to buy and sell cars easily, It provides a user-friendly interface for searching, filtering, and comparing cars, The platform also includes features such as user reviews, ratings, and a secure payment system, GearShift aims to simplify the car buying and selling process for users, The platform is built with Laravel and Tailwind CSS, ensuring a modern and responsive design.',
    ],
    techs: [php, laravel, js],
    image: 'assets/imgs/projects/GearShift.png',
    link: 'https://github.com/hassanjebli/GearShift',
  },
  {
    title: 'Scholarly - A platform for school management',
    description: [
      'Schloarly is a platform designed to streamline school management processes, It offers features such as student enrollment, attendance tracking, grade management, and communication tools for teachers and parents, The platform aims to enhance the overall efficiency of school operations and improve communication between stakeholders, Scholarly is built with Laravel and Tailwind CSS, providing a modern and user-friendly interface.',
    ],
    techs: [php, laravel, react, restApi, tailwindcss],
    image: 'assets/imgs/projects/SchloarLy.png',
    link: 'https://github.com/hassanjebli/scholarly',
  },
  {
    title: 'TaskFlow - A tasks management platform',
    description: [
      'Taskflow is a task management platform that helps users organize and prioritize their tasks effectively',
    ],
    techs: [php, laravel,react, tailwindcss,inertia],
    image: 'assets/imgs/projects/TaskFLow.png',
    link: 'https://github.com/hassanjebli/tasks-management',
  },
  {
    title: 'PixelPosit - A platform for searching jobs',
    description: [
      'PixelPosit is a job search platform that connects job seekers with potential employers',
    ],
    techs: [php, laravel, tailwindcss],
    image: 'assets/imgs/projects/PixelPositions.png',
    link: 'https://github.com/hassanjebli/pixels-positions',
  },
  {
    title: 'Ziyarah - Travel Agency Management (for Hajj, Umrah, & Beyond)',
    description: ['Ziyarah is a travel agency management platform designed for Hajj, Umrah, and other travel services'],
    techs: [react,ts,tailwindcss],
    image: 'assets/imgs/projects/Ziyarah.png',
    link: 'https://github.com/hassanjebli/ziyarah',
  },
];
