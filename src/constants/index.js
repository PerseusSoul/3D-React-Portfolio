import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  python,
  django, 
  fastapi,
  netcore, 
  aws, 
  docker, 
  git, 
  figma, 
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  rently,
  igt,
  graphql,
  android,
  ios,
  docus,
  ecommerce,
  fullstack,
  eshopAI,
  TwinTual,
  nftgame,
  companysite,
  nextjs,
  fastlane,
  Portfolio,
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
    id: "skills",
    title: "Skills & Achievements",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
  {
    id: "resume",
    title: "Download Resume",
  },
];

const Introduction =
  "I am a fullstack developer and I love what I do. I have such a good experience in Python, FastAPI, Django, C#, Asp.Net, JavaScript, TypeScript, React.js, Vue.js, Node.js and SQL/NoSQL DB management. My 7-year career includes a lot of important roles - from scalable app design challenges in production engineering teams to launching cutting-edge applications for startups. I've been trying to get both of tech skills and soft skills, and my key features are teamwork and problem-solving capabilities.";

const projectsIntro =
  "The following projects demonstrate my skills and experience through real-world examples of my work. Each project is briefly described with used skills and technologies and showcase my proficiency in solving complex problems and my passion for learning and integrating diverse technologies.";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "AI/ML",
    icon: backend,
  },
  {
    title: "Blockchain",
    icon: fullstack,
  },
];

const technologies = [
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Android",
    icon: android,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: ".Net Core",
    icon: netcore,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Elevance Health",
    icon: rently,
    iconBg: "#D77232",
    date: "August 2022 - October 2024",
    points: [
      "Designed and launched a Django/React.js dashboard to provide statistical insights, including the number of detected incidents per zone and verified gunshot cases.", 
      "Built API interfaces to facilitate service communication, leveraging serializers, mixins, and custom middleware for efficiency.", 
      "Created a middleware and published it as a module to handle authentication and authorization; increased API call efficiency by 10% and reduced latency by 30%.", 
      "Wrote the database layer that can access several types of databases with Django ORM/PostgreSQL and caching strategies using Redis; improved stability and reduced DB querying performance by 20% by optimizing SQL queries.", 
      "Built the gateway service which deliver, and aggregates the 3M row of data per hour from RabbitMQ to AWS S3 in parquet format to extract meaningful datasets.", 
      "Collaborated with cross-functional team such as product manager, database engineers, QA engineers, and other developers to deliver features according to specifications and deadlines.", 
    ],
  },
  {
    title: "Intern and Junior Web Developer",
    company_name: "Divalia S.A. de C.V.",
    icon: igt,
    iconBg: "#ffffff",
    date: "April 2020 - July 2022",
    points: [
      "Developed and mentored on multiple projects built with React/Next.js, ASP.NET and Node.js, optimizing logistics and secure file management.", 
      "Built an automated testing framework to enhance the pick-and-pack process in a third-party logistics warehouse.", 
      "Designed and maintained data-driven reports, extracting and presenting key insights from databases.", 
      "Mentored in a cross-functional development team, overseeing project organization, nightly code merges, and deployments.", 
      "Integrated multiple third-party systems, enabling seamless data exchange.", 
      "Engineered a secure file-sharing platform for the legal industry, integrating AWS S3 pre-signed URLs and enforcing strict authorization rules for controlled access.", 
      "Performed code and architectural reviews, ensuring best practices across Laravel, Node.js, JavaScript, AWS S3, and PostgreSQL.", 
    ],
  },
];

const achievements = [
  {
    achievement:
      "Developed a microservice-based system capable of detecting gunshots in specific areas and triggering law enforcement dispatch.",
    company: "Soundthinking",
  },
  {
    achievement:
      "Developed and mentored on multiple projects built with React/Next.js, ASP.NET and Node.js, optimizing logistics and secure file management.",
    company: "Divalia S.A. de C.V.",
  },
  {
    achievement:
      "Designed, architectured and developed Docus, which is a Personal Health Assistant powered by advanced AI technology.",
    company: "Elevance Health",
  },
  {
    achievement:
      "Achieved complete test case coverage by utilizing the Jest and Detox frameworks for unit, integration, and end-to-end testing.",
    company: "Divalia S.A. de C.V.",
  },
  {
    achievement:
      "Achieved moving Jenkins from a local machine to AWS EC2 cloud with Docker, which saved us 4 hours of daily manual work for test automation.",
    company: "Divalia S.A. de C.V.",
  },
  {
    achievement:
      "Architected & implemented a full stack CI/CD system for Fastlane using React, Node.js, WebSockets & SQLite DB, leading to a notable increase in overall efficiency and output.",
    company: "Elevance Health",
  },
];

const projects = [
  {
    name: "3D Portfolio",
    description:
      "Discover my interactive 3D portfolio crafted in React, Three.js, React Three Fiber, React Three Drei, Tailwind CSS, and Framer Motion. Experience a unique three-dimensional perspective, responsive design with Tailwind CSS, and captivating animations powered by Framer Motion. Stay connected effortlessly with integrated email functionality.",
    tags: [
      {
        name: "reactjs",
        color: "violet-text-gradient",
      },
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "react-three-fiber",
        color: "green-text-gradient",
      },
      {
        name: "react-three-drei",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "orange-text-gradient",
      },
    ],
    image: Portfolio,
    sourceCode: "https://github.com/Bharathkdev/portfolio",
    linkedinPost:
      "https://www.linkedin.com/posts/bharathrna_reactjs-threejs-tailwindcss-activity-7208475385955590144-j3N0?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Ecommerce Site",
    description:
      "Built on Vue.js, the events application stands as a comprehensive, full-stack platform with MongoDB backed database for managing events. With a fully responsive user interface, it serves as a hub, spotlighting diverse events taking place globally. Featuring seamless payment processing through Stripe, you have the capability to purchase tickets for any event or even initiate and manage your own events.",
    tags: [
      {
        name: "Vue.js",
        color: "violet-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "ASP.NET",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "orange-text-gradient",
      },
    ],
    image: ecommerce,
    sourceCode: "https://github.com/Bharathkdev/event_platform",
    linkedinPost:
      "https://www.linkedin.com/posts/bharathrna_reactjs-nextjs-mongodb-activity-7178368379722821632-ESkr?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "AI-pwoered Eshop",
    description:
      "Shoppackage is a generative AI rendering tool that helps render inspiration to fit into your house and streamline procurement with just one click.",
    tags: [
      {
        name: "React.js",
        color: "violet-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "orange-text-gradient",
      },
      {
        name: "AI integration",
        color: "violet-text-gradient",
      },
    ],
    image: eshopAI,
    sourceCode: "https://github.com/Bharathkdev/event_platform",
    linkedinPost:
      "https://www.linkedin.com/posts/bharathrna_reactjs-nextjs-mongodb-activity-7178368379722821632-ESkr?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Company Site",
    description:
      "Culture simplified. Automate employee celebrations, send group eCards, run pulse surveys, and launch award & nomination programs all within a single platform.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "violet-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: companysite,
    sourceCode: "https://github.com/Bharathkdev/expenseTrackerApp",
    linkedinPost:
      "https://www.linkedin.com/posts/bharathrna_reactnative-javascript-firebase-activity-7118224386054135808-VeKD?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Docus",
    description:
      "Use Docus AI Health Assistant for more accurate health decisions. Get a health report and validate it with a top doctor’s medical second opinion.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "violet-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Cloudflare",
        color: "orange-text-gradient",
      },
      {
        name: "Sanity",
        color: "orange-text-gradient",
      },
    ],
    image: docus,
    sourceCode: "https://github.com/Bharathkdev/full_stack_expo_app",
    linkedinPost:
      "https://www.linkedin.com/posts/bharathrna_a-full-stack-react-native-video-streaming-activity-7199439106756468736-ZXqI?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "TwinTual",
    description:
      "I challenged myself to design a high-performance single-screen app with impressive visuals, creating a custom keyboard for seamless text manipulation and complex cursor positioning. I incorporated animations, a dynamic glowing border, stylish fonts, emojis, and images. Optimizing performance involved advanced calculations and memoization techniques, ensuring smooth functionality even with over 1000 characters.",
    tags: [
      {
        name: "Dart",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter",
        color: "green-text-gradient",
      },
      {
        name: "FlutterFlow",
        color: "orange-text-gradient",
      },
      {
        name: "performance-optimisation",
        color: "pink-text-gradient",
      },
      {
        name: "layout-calculations",
        color: "violet-text-gradient",
      },
    ],
    image: TwinTual,
    sourceCode: "https://github.com/Bharathkdev/custom_keyboard",
    linkedinPost:
      "https://www.linkedin.com/posts/bharathrna_hello-all-i-recently-challenged-myself-activity-7205568376868401152-tHcu?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "NFT Game",
    description:
      "Simple game projects to be attached to larger services and platforms built with ASP.NET and Vue.js. I contributed to real-time data-flow, seamless animation, audio streaming, and high-quality backend APIs implementation.",
    tags: [
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "Supabase",
        color: "orange-text-gradient",
      },
    ],
    image: nftgame,
    sourceCode: "https://github.com/Bharathkdev/RNShop",
    linkedinPost: "",
  },
];

const githubLink = "https://github.com/Bharathkdev";

const linkedinLink = "https://www.linkedin.com/in/bharathrna/";

const blogLink =
  "https://engineering.rently.com/fastlane-build-and-ship-your-app-autonomously/";

export {
  Introduction,
  services,
  technologies,
  experiences,
  achievements,
  projects,
  blogLink,
  githubLink,
  linkedinLink,
  projectsIntro,
};
