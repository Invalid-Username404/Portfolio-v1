export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Web Developer",
    icon: "/assets/Web-icon.svg",
  },

  {
    title: "Content Creator",
    icon: "../assets/Content-icon.svg",
  },

  {
    title: "React Developer",
    icon: "/assets/React-icon.svg",
  },
];

export const Technologies = [
  {
    name: "HTML 5",
    icon: "/assets/HTML5-icon.svg",
  },
  {
    name: "CSS 3",
    icon: "/assets/CSS3-icon.svg",
  },
  {
    name: "JavaScript",
    icon: "/assets/Javascript-icon.svg",
  },
  {
    name: "TypeScript",
    icon: "/assets/Typescript-icon.svg",
  },
  {
    name: "React JS",
    icon: "/assets/React-icon.svg",
  },
  {
    name: "Redux Toolkit",
    icon: "/assets/Redux-icon.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/assets/Tailwindcss-icon.svg",
  },
  {
    name: "Node JS",
    icon: "/assets/Nodejs-icon.svg",
  },

  {
    name: "Three JS",
    icon: "/assets/Threejs.svg",
  },
];

export const experiences = [
  {
    title: "Javascript Developer",
    company_name: "Private",
    icon: "/assets/Javascript-icon.svg",
    iconBg: "#383E56",
    date: "Apr 2020",
    points: [
      "This is the first programming language I learn.",
      "I have used it as launch point for my programming journey.",
      "Javascript is really a fascinating and exciting language to learn  ",
      "It was hard for me to find the good resources to learn from at first, as finding an excellent teacher is hard",
    ],
  },

  {
    title: "Typescript developer",
    company_name: "Private",
    icon: "/assets/Typescript-icon.svg",
    iconBg: "#383E56",
    date: "Aug 2020",
    points: [
      "Typescript is a great tool that adds to the power of javascript.",
      "It helped me write  better code and extend my knowledge",

      "At first it was hard to understand its usefulness as it requires more code and understanding",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Private",
    icon: "/assets/React-icon.svg",
    iconBg: "#383E56",
    date: "Aug 2020",
    points: [
      "This is the first Javascript library I try.",
      "I have used it as launch point for my developing learning.",
      "Reading about its features and projects it produces I have learned a lot about programming (Routing, APIs,Json,Optimization, Nodejs, and other programming concepts) ",
      "I have watched hundreds tutorials about react and its related concepts which have boosted my knowledge",
    ],
  },
];

export const testimonials = [
  {
    testimonial:
      "This guy is really good. I would've hired him as my programmer Robin if I could, but Gotham is really far away from cairo",
    name: "Batman",
    designation: "Crime Fighter",
    company: "Justice-League",
    image: "/assets/Profile-Pics/BatMan.png",
  },
  {
    testimonial: "Hire him, yeah",
    name: "Creppy Cat",
    designation: "Creeper",
    company: "Cats",
    image: "/assets/Profile-Pics/CreppyCat.jpg",
  },
  {
    testimonial:
      "Seriously, I don't know the guy. He just bothers me in every project he makes, just hire him so he can leave me alone... Seriously.",
    name: "serious Cat",
    designation: "Seriousness",
    company: "Cats",
    image: "/assets/Profile-Pics/seriousCat.jpg",
  },
  {
    testimonial: "I would have conquered Egypt if not for this guy",
    name: "Imhoteb",
    designation: "Mummy ",
    company: "cursed Tombs",
    image: "/assets/Profile-Pics/Imhoteb.jpg",
  },
];

export const projects = [
  {
    name: "Portfolio-v1",
    description: "The site we are on now",
    tags: [
      {
        name: "react",
        color: "text-[#22d3ee]",
      },

      {
        name: "tailwindcss",
        color: "text-[#4a044e]",
      },

      {
        name: "emailjs",
        color: "text-[#047857]",
      },

      {
        name: "framer-motion",
        color: "text-[#5b21b6]",
      },
      {
        name: "threejs",
        color: "text-[#e11d48]",
      },
      {
        name: "react-parallax-tilt",
        color: "text-[#140aaa]",
      },
    ],
    image: "/assets/Portfolio.png",
    source_code_link: "https://github.com/Mohamed208209/Portfolio-v1",
    deployment: {
      on: "Vercel",
      link: "https://portfolio-v1-3368.vercel.app/",
    },
  },
  {
    name: "The Threader",
    description: "A full stack Threads-like app built using NextJs, Mongoose, and Clerk.It's pretty massive project, and I'm still adding more features.",
    tags: [
      {
        name: "NextJs",
        color: "text-[#22d3ee]",
      },

      {
        name: "tailwindcss",
        color: "text-[#4a044e]",
      },

      {
        name: "clerk",
        color: "text-[#6b21a8]",
      },

      {
        name: "Radix",
        color: "text-[#020617]",
      },
      {
        name: "Mongoose",
        color: "text-[#166534]",
      },
      {
        name: "React Hook Form",
        color: "text-[#9d174d]",
      },
      {
        name: "UploadThing",
        color: "text-[#0369a1]",
      }
    ],
    image: "/assets/Threader.png",
    source_code_link: "https://github.com/Mohamed208209/The-Threader",
    deployment: {
      on: "Vercel",
      link: "https://the-threader-j5l6e646k-mohamed208209.vercel.app/",
    },
  },
  {
    name: "Cryptonian",
    description: "An app for cryptocurrencies, their News, Rankings and statistics ",
    tags: [
      {
        name: "react",
        color: "text-[#22d3ee]",
      },
      {
        name: "RapidAPI",
        color: "text-[#1c1917]",
      },

      {
        name: "ant Design",
        color: "text-[#4a044e]",
      },

      {
        name: "Redux",
        color: "text-[#047857]",
      },
      {
        name: "Axios",
        color: "text-[#86198f]",
      },

      {
        name: "Recharts",
        color: "text-[#5b21b6]",
      },
      {
        name: "react-router-dom",
        color: "text-[#e11d48]",
      }
    
    ],
    image: "/assets/Cryptonian.png",
    source_code_link: "https://github.com/Mohamed208209/Cryptonian",
    deployment: {
      on: "Vercel",
      link: "https://cryptonian-mu.vercel.app/",
    },
  },
  //  //  /// / / / /
  {
    name: "Youtube-Displayer",
    description: "A youtube-like app for videos and channels",
    tags: [
      {
        name: "react",
        color: "text-[#22d3ee]",
      },
      {
        name: "RapidAPI",
        color: "text-[#1c1917]",
      },

      {
        name: "Material UI",
        color: "text-[#4f46e5]",
      },

      {
        name: "react-router-dom",
        color: "text-[#e11d48]",
      },
      {
        name: "Axios",
        color: "text-[#86198f]",
      },
      {
        name: "React Player",
        color: "text-[#064e3b]",
      },

    
    ],
    image: "/assets/Youtube-Displayer.png",
    source_code_link: "https://github.com/Mohamed208209/Youtube-Displayer",
    deployment: {
      on: "Vercel",
      link: "https://youtube-displayer.vercel.app/",
    },
  },

  {
    name: "Quote Generator",
    description: "A simple app that displays random quotes ",
    tags: [
      {
        name: "react",
        color: "text-[#22d3ee]",
      },
    ],
    image: "/assets/random-quote-generator.png",
    source_code_link: "https://github.com/Mohamed208209/Random-Quote",
    deployment: {
      on: "Vercel",
      link: "https://random-quote-lovat.vercel.app/",
    },
  },
  {
    name: "Chat App",
    description:
      "Chat app  with google and facebook login methods, the app is build using react-chat-engine. I believe it's somewhat old library and not that reliable , but it's free(for 30 days) so...sorry ",
    tags: [
      {
        name: "react",
        color: "text-[#22d3ee]",
      },

      {
        name: "Google's Firebase",
        color: "text-[#fcd34d]",
      },
      {
        name: "Google",
        color: "text-[#7dd3fc]",
      },
      {
        name: "Facebook",
        color: "text-[#1d4ed8]",
      },
    ],
    image: "/assets/chat-app.png",
    source_code_link: "https://github.com/Mohamed208209/Moralist208-Chat-App",
    deployment: {
      on: "Vercel",
      link: "https://moralist208-chat-app.vercel.app/",
    },
  }

  
];
