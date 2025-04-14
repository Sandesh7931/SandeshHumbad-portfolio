import {
  mobile,
  creator,
  frontend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  backend,
  fullstack,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: frontend,
  },
  {
    title: "BackEnd Development",
    icon: backend,
  },
  {
    title: "Full Stack Development",
    icon: fullstack,
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
    speed: 2.0,
  },
  {
    name: "CSS3",
    icon: css,
    speed: 2.5,
  },
  {
    name: "JavaScript",
    icon: javascript,
    speed: 2.2,
  },
  {
    name: "TypeScript",
    icon: typescript,
    speed: 2.0,
  },
  {
    name: "ReactJS",
    icon: reactjs,
    speed: 1.8,
  },
  {
    name: "Redux-Toolkit",
    icon: redux,
    speed: 2.3,
  },
  {
    name: "Tailwind-CSS",
    icon: tailwind,
    speed: 3.0,
  },
  {
    name: "NodeJs",
    icon: nodejs,
    speed: 1.5,
  },
  {
    name: "MongoDB",
    icon: mongodb,
    speed: 1.2,
  },
  {
    name: "ThreeJS",
    icon: threejs,
    speed: 2.8,
  },
  {
    name: "Git",
    icon: git,
    speed: 2.4,
  },
  {
    name: "Figma",
    icon: figma,
    speed: 1.9,
  },
  {
    name: "Docker",
    icon: docker,
    speed: 1.7,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Core Member",
    company_name: "Linux Club Community",
    icon: starbucks,
    iconBg: "#000000",
    date: "March 2023 - Present",
    points: [
      "Actively contributing to the Linux Club Community as a core member.",
      "Organizing and conducting workshops on Linux, DevOps, and open-source technologies.",
      "Collaborating with fellow members to promote open-source contributions and knowledge sharing.",
      "Assisting beginners in understanding Linux fundamentals and troubleshooting system issues.",
      "Engaging in discussions, meetups, and hackathons to foster a strong Linux community.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
