import {
  mobile,
  backend,
  creator,
  web,
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
  iiitpune,srichai,ytclone
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },{
    id: "skills",
    title: "Skills",
  },{
    id:"Projects",
    title:"Projects"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Computer Science Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Freelance Full Stack Developer",
    company_name: "Self-employed",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Dec 2024 – Present",
    points: [
      "Designed and developed responsive, user-centric websites and dashboards using React, Tailwind CSS, and Node.js, ensuring seamless performance across devices.",
      "Integrated complex payment gateways and third-party APIs to streamline client operations and enhance user experience.",
      "Utilized version control systems (Git) and agile methodologies to manage projects efficiently and ensure timely delivery.",
      "Continuously optimized application performance, accessibility, and SEO best practices to improve user engagement and visibility."
    ],
  },
];

export const education = [
  {
    institution: "IIIT Pune",
    degree: "Bachelor's in Electronics & Communication Engineering",
    duration: "2022 - 2026",
    image:iiitpune, 
  },
  {
    institution: "Sri Chaitanya Junior College, Vijayawada",
    degree: "Senior Secondary Education",
    duration: "2020 - 2022",
    image:srichai, 
  }
];


const testimonials = [
  {
    testimonial:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    name: "Harold Abelson",
    designation: "CFO",
    company: " Harold Abelson",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "The Beautiful Thing About Learning is That No One Can Take It Away From You",
    name: "B.B. King",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "In the Middle Of Every Difficulty Lies Opportunity",
    name: "Albert Einstein",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Agent Management System",
    description:
      " Developed a full-stack web application to manage agents, with 3D visualizations using Three.js and AI-powered intelligent agent management. Implemented JWT authentication, RESTful APIs, and secure data management with MongoDB.",
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
    source_code_link: "https://github.com/Vishnu-sidd2/Agent-Mangement-System",
  },
  {
    name: "Momos Eh ",
    description:
      " Built a responsive website for an Indian restaurant in Canada with online ordering functionality. There is an option through which users can easily order food from various food delivering apps.Improved business visibility and customer engagement through a user-friendly design. Improved business visibility.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://momoseh.ca/",
  },
  {
    name: "Personal Portfolio",
    description:
      "A fully animated 3D portfolio built with React, Tailwind CSS, and Three.js to showcase my projects, skills, and experience in an interactive, immersive way. Features smooth scroll-based animations, dynamic 3D elements, responsive design, and optimized performance for a seamless user experience across devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  }, {
  name: "YouTube Clone",
  description:
    "Developed a feature-rich YouTube clone using React, Tailwind CSS . Users can search for videos, and watch videos with an embedded player. Designed with a clean, intuitive UI that closely mimics YouTube’s experience, ensuring accessibility and performance across devices.",
  tags: [
    {
      name: "html",
      color: "blue-text-gradient",
    },
    {
      name: "react",
      color: "green-text-gradient",
    },
    {
      name: "tailwind",
      color: "pink-text-gradient",
    },
  ],
  image: ytclone, // replace with your imported image
  source_code_link: "https://github.com/Vishnu-sidd2/youtube-clone",
},{
    name: "CRM System Dashboard",
    description:
        "Developed a robust CRM Dashboard web application to streamline product inventory management and enhance user interaction. Features secure user authentication with public/private routing. The interactive dashboard provides **key business insights through data visualizations, including a dynamic graph (and can be extended for pie charts/other analytics)**. A comprehensive Product Management module enables full CRUD (Create, Read, Update, Delete) operations for products. Built to offer a responsive and intuitive user experience.",
    tags: [
        {
            name: "reactjs",
            color: "blue-text-gradient",
        },
        {
            name: "redux-toolkit",
            color: "green-text-gradient",
        },
        {
            name: "restapi", // As you're using dummyjson.com as a REST API
            color: "pink-text-gradient",
        },
        // You could add other tags if relevant, e.g., "authentication", "crud"
    ],
  image: "Screenshot 2025-06-08 220836", // Placeholder
source_code_link: "https://github.com/Vishnu-sidd2/React-CRM-app-"

}

];

export { services, technologies, experiences, testimonials, projects };
