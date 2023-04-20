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
  tracemoe,
  primogem,
  firework,
  dice,
  particles,
  threejs,
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
    title: "Vue Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "3D Lovers",
    icon: backend,
  },
  {
    title: "Games and sports enthusiasts",
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
    title: "Front end Web Developer",
    company_name: "Unknown",
    icon: primogem,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "FireWork",
    description:
      "Webgl-3D-FireWork,through shader learn , in order to improve one's shader skill demo,may be have some bug, if you find ,please submit issue for me. Thanks! ",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "GLSL",
        color: "pink-text-gradient",
      },
    ],
    image: firework,
    source_code_link: "https://github.com/KallkaGo/FireWork",
  },
  {
    name: "Genius Invokation TCG",
    description:
      "Reproduction events of Genshin Impact 'Genius Invokation TCG',you have two chance to throw dice, you can lock result you want, next time will throw dice without locked result.  ",
    tags: [
      {
        name: "vue3/typescript",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "cannon-es",
        color: "pink-text-gradient",
      },
    ],
    image: dice,
    source_code_link: "https://github.com/KallkaGo/GeniusInvokationTCG",
  },
  {
    name: "ParticlesEffect",
    description:
      "Practice with point cloud particle effects, switch between point cloud models by mouse wheel, also do the gradient of particle colour, switch between model gradients.",
    tags: [
      {
        name: "R3F/React-three/drei",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: particles,
    source_code_link: "https://github.com/KallkaGo/ParticlesEffect",
  },
  {
    name: "ACG-SEARCH",
    description:
      "AdachiBOT Plugin which search animation name by  picture  ",
    tags: [
      {
        name: "TraceMoe",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: tracemoe,
    source_code_link: "https://github.com/KallkaGo/acg_search",
  }
];

export { services, technologies, experiences, testimonials, projects };
