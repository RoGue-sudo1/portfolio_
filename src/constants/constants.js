import {
  mobile,
  frontend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  MemeXD,
  video_talker,
  netflix,
  appointFit,
  task_manager,
  meme_generator,
  airbnb_clone,
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
  {
    id: "resume",
    title: "Download CV",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
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
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "MemeXD",
    icon: MemeXD,
    iconBg: "#383E56",
    date: "May 2021 - July 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Video Talker",
    description:
      "A web application that enables us to video conferencing based on webRTC logic, it allow us to do direct and group calls.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaSript",
        color: "green-text-gradient",
      },
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "WebRTC",
        color: "pink-text-gradient",
      },
    ],
    image: video_talker,
    preview_link: "https://videotalker.netlify.app/",
    source_code_link: "https://github.com/RoGue-sudo1/VideoTalker_frontend",
  },
  {
    name: "Netflix Clone",
    description:
      "The project is an ambitious initiative aimed atreplicating the core functionalities of the renowned streaming platform Netflix. It revolves around three key functionalities: User Authentication, Search, and the Browse Page.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaSript",
        color: "green-text-gradient",
      },
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Store",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Apis",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    preview_link: "https://netflixclonegpt.netlify.app/",
    source_code_link: "https://github.com/RoGue-sudo1/NetflixGPT",
  },
  {
    name: "AppointFit",
    description:
      "This comprehensive solution empowers fitness trainers with key functionalities for creating, editing, and deleting appointments, coupled with an intuitive calendar view for organized date-wise appointments",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaSript",
        color: "green-text-gradient",
      },
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Store",
        color: "pink-text-gradient",
      },
    ],
    image: appointFit,
    preview_link: "https://appointfit.netlify.app/",
    source_code_link: "https://github.com/RoGue-sudo1/AppointFit",
  },
  {
    name: "Easy Manager",
    description:
      "The Easy Manageris a dynamic project that incorporates the functionality of a to-do manager with Trello-inspired features",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaSript",
        color: "green-text-gradient",
      },
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
    ],
    image: task_manager,
    preview_link: "https://easymanager.netlify.app/",
    source_code_link: "https://github.com/RoGue-sudo1/Trello_Clone",
  },
  {
    name: "Meme Generator",
    description:
      "A web application by which users can generate random meme images on which we can edit it by adding our puns and sentences, and make personalized.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaSript",
        color: "green-text-gradient",
      },
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
    ],
    image: meme_generator,
    preview_link: "https://memeseditor.netlify.app/",
    source_code_link: "https://github.com/RoGue-sudo1/meme_generator",
  },
  {
    name: "Airbnb Clone",
    description: "A static web application clone of Airbnb.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaSript",
        color: "green-text-gradient",
      },
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
    ],
    image: airbnb_clone,
    source_code_link: "https://github.com/RoGue-sudo1/Airbnb_Clone",
  },
];

export { services, technologies, experiences, projects };
